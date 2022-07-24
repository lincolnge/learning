function TestB () {
  const args = Array.from(arguments);
  if (!(this instanceof TestB)) {
    return new TestB(...args);
  }
  this.task = [];
  const fn = () => {
    console.log('hi', ...args);
    this.next();
  };
  setTimeout(() => {
    this.next();
  }, 0);
  this.task.push(fn);
  return this;
}

TestB.prototype.sleep = function (time) {
  const t = new Date();
  console.log('sleep', time);
  const fn = () => {
    setTimeout(() => {
      const now = new Date();
      console.log('end sleep', time, (now - t) / 1000);
      this.next();
    }, time * 1000);
  };
  this.task.push(fn);
  return this;
};

TestB.prototype.sleepFirst = async function (time) {
  const t = new Date();
  console.log('sleepFirst', time);
  const fn = () => {
    setTimeout(() => {
      const now = new Date();
      console.log('end sleepFirst', time, (now - t) / 1000);
      this.next();
    }, time * 1000);
  };
  this.task.unshift(fn);
  return this;
};

TestB.prototype.eat = function (some) {
  const fn = () => {
    console.log('eat', some);
    this.next();
  };
  this.task.push(fn);
  return this;
};

TestB.prototype.next = function () {
  const fn = this.task.shift();
  fn && fn();
};

// let ttt = TestB('John', 42).eat('apple').sleep(10).eat('banana');
// TestB('John', 42);
console.log('\n');
// let ttt = TestB('John', 42).eat('apple');
// TODO...
// let ttt = TestB('John', 42).eat('apple').sleep(5).eat('banana');
// console.log('ttt', ttt);

// 使用 reduce 实现 map

[].map(item => item);
function newMap (arr, fn) {
  return arr.reduce((preview, current) => {
    return [...preview, fn(current)];
  }, []);
}

// 实现 a().b().c();

// function a() {
//   console.log('a');
//   return this;
// }
// function b() {
//   console.log('b');
//   return this;
// }
// function c() {
//   console.log('c');
//   return this;
// }

function Func (...args) {
  if (!(this instanceof Func)) {
    return new Func(...args);
  }
  return this;
}

const a = Func.prototype.a = Func.prototype.b = function (...args) {
  console.log('a');
  if (!(this instanceof Func)) {
    return new Func(...args);
  }
  return this;
};

const b = Func.prototype.b = function (...args) {
  console.log('b');
  if (!(this instanceof Func)) {
    return new Func(...args);
  }
  return this;
};
const c = Func.prototype.c = function (...args) {
  console.log('c');
  if (!(this instanceof Func)) {
    return new Func(...args);
  }
  return this;
};

a().b().c();
b().c().a();

// 最长子序列
