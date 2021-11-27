const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
function Promise(executor) {
    let self = this;
    self.status = PENDING;
    self.onFulfilled = [];
    self.onRejected = [];

    function resolve(value) {
        if (self.status === PENDING) {
            self.status = FULFILLED;
            self.value = value;
            self.onFulfilled.forEach(fn => fn());
        }
    }

    function reject(reason) {
        if (self.status === PENDING) {
            self.status = REJECTED;
            self.reason = reason;
            self.onRejected.forEach(fn => fn());
        }
    }
    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };
    let self = this;
    let promise2 = new Promise((resolve, reject) => {
        if (self.status === FULFILLED) {
            setTimeout(() => {
                try {
                    let x = onFulfilled(self.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            })
        } else if (self.status === REJECTED) {
            setTimeout(() => {
                try {
                    let x = onRejected(self.reason);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            })
        } else if (self.status === PENDING) {
            self.onFulfilled.push(() => {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(self.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
            self.onRejected.push(() => {
                setTimeout(() => {
                    try {
                        let x = onRejected(self.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
        }
    });
    return promise2;
}

function resolvePromise(promise2, x, resolve, reject) {
    let self = this;
    if (promise2 === x) {
        reject(new TypeError('Chaining cycle'));
    }
    if (x && typeof x === 'object' || typeof x === 'function') {
        let used;
        try {
            let then = x.then;
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (used) return;
                    used = true;
                    resolvePromise(promise2, y, resolve, reject)
                }, r => {
                    if (used) return;
                    used = true;
                    reject(r);
                });
            } else {
                if (used) return;
                used = true;
                resolve(x);
            }
        } catch (e) {
            if (used) return;
            used = true;
            reject(e);
        }
    } else {
        resolve(x);
    }
}

Promise.defer = Promise.deferred = function () {
    let dfd = {}
    dfd.promise = new Promise((resolve,reject)=>{
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}
module.exports = Promise;


Promise.resolve = function (params) {
    if (params instanceof Promise) {
        return params
    }
    return new Promise((resolve,reject)=>{
        if (params && params.then && typeof params.then === 'function') {
            setTimeout(() => {
                params.then(resolve, reject);
            })
        } else {
            resolve(params);
        }
    });
}

Promise.reject = function(reason) {
    return new Promise((resolve, reject) => {
        reject(reason);
    });
}

Promise.prototype.catch = function(onRejected) {
    return this.then(null, onRejected);
}

Promise.prototype.finally = function(callback) {
    return this.then((value) => {
        return Promise.resolve(callback()).then(() => {
            return value;
        });
    }, err => {
        return Promise.resolve(callback()).then(() => {
            throw err;
        })
    });
}

Promise.all2 = function(promises) {
    return new Promise((resolve, reject) => {
        let index = 0;
        let result = [];
        if (promises.length === 0) {
            resolve(result);
        } else {
            function processValue(i, data) {
                result[i] = data;
                if (++index === promises.length) {
                    resolve(result);
                }
            }
            for (let i = 0; i < promises.length; i++) {
                Promise.resolve(promises[i]).then(data => {
                    processValue(i, data);
                }, err => {
                    reject(err);
                    return;
                });
            }
        }
    })
}

function testAll() {
    var promise1 = new Promise((resolve, reject) => {
        resolve(3);
    })
    var promise2 = 42;
    var promise3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'foo');
    });

    Promise.all2([promise1, promise2, promise3]).then(function(values) {
    console.log(values); //[3, 42, 'foo']
    },(err)=>{
        console.log(err)
    });

    var p = Promise.all2([]); // will be immediately resolved
    var p2 = Promise.all2([1337, "hi"]); // non-promise values will be ignored, but the evaluation will be done asynchronously
    console.log(p);
    console.log(p2)
    setTimeout(function(){
        console.log('the stack is now empty');
        console.log(p2);
    });
}
testAll();

Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            return;
        } else {
            for (let i = 0; i < promises.length; i++) {
                Promise.resolve(promises[i]).then(data => {
                    resolve(data);
                    return;
                }, err => {
                    reject(err);
                    return;
                });
            }
        }
    });
}

if (!Promise.allSettled2) {
    const rejectHandler = reason => ({status: 'rejected', reason});
    const resoveHandler = value => ({status: 'fulfilled', value});

    Promise.allSettled2 = promises => {
        return Promise.all(promises.map(promise => {
            return Promise.resolve(promise).then(resoveHandler, rejectHandler);
        }));
    }
}

Promise.allSettled3 = promises => {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) return;

        let index = 0;
        let result = [];
        const processValue = (i, status, value) => {
            result[i] = {
                status,
                [status === 'fulfilled' ? 'value' : 'reason']: value,
            }
            index += 1;
            if (index === promises.length) {
                return resolve(result);
            }
        }
        promises.forEach((promise, i) => {
            Promise.resolve(promise).then(value => {
                return processValue(i, 'fulfilled', value);
            }, err => {
                return processValue(i, 'rejected', err);
            });
        })
    })
}

// 使用
const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, 'three');
})
const promises = [p1, p2, p3]
Promise.allSettled3(promises).then(console.log);

Promise.allSettled2(promises).then(console.log);
Promise.allSettled(promises).then(console.log);
