async function promiseLimit(tasks, limit) {
  var ret = [];
  var executing = [];
  while(tasks.length > 0) {
    var fn = tasks.shift();
    var p = Promise.resolve().then(() => fn());
    ret.push(p);
    var e = p.then(() => executing.splice(executing.indexOf(e), 1));
    executing.push(e);
    if (executing.length >= limit) {
      await Promise.race(executing);
    }
  }
  return Promise.all(ret);
}

async function concurrentControl(requestPool, poolLimit) {
  // 存放所有请求返回的 promise
  const ret = [];
  // 正在执行的请求，用于控制并发
  const executing = [];

  while (requestPool.length > 0) {
    const request = requestPool.shift();
    const p = Promise.resolve().then(() => request());
    ret.push(p);
    // p.then()返回一个新的 promise，表示当前请求的状态
    const e = p.then(() => executing.splice(executing.indexOf(e), 1));
    executing.push(e);
    if (executing.length >= poolLimit) {
      await Promise.race(executing);
    }
  }
  return Promise.all(ret);
}

const promise1 = () => {console.log(3);return Promise.resolve(3)};
const promise2 = () => {console.log(42);return 42};
const promise3 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('0 foo');
    resolve();
  }, 1000, 'foo');
});
const promise4 = () => {
  console.log('promise4');
  return 'promise 4 fn';
}


// Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
//   // if (typeof values === 'function') {
//   //   values();
//   // }
//   // values && values();
//   console.log('values', values);
//   values.forEach(item => {
//     item && item();
//   })
// });

console.log('promise2', promise2);
concurrentControl([promise1, promise2, promise3, promise4], 2);