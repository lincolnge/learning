async function promiseLimit (requestPool, poolLimit) {
  // 存放所有请求返回的 promise
  const ret = [];
  // 正在执行的请求，用于控制并发
  const executing = [];

  while (requestPool.length > 0) {
    const request = requestPool.shift();
    const p = Promise.resolve().then(() => request());
    ret.push(p);
    // p.then()返回一个新的 promise，表示当前请求的状态
    console.log('before e');
    const e = p.then(() => {
      console.log('then e', e);
      return executing.splice(executing.indexOf(e), 1);
    });
    console.log('after e', e);
    executing.push(e);
    if (executing.length >= poolLimit) {
      await Promise.race(executing);
    }
  }
  return Promise.all(ret);
}

const promise1 = () => { console.log(3); return Promise.resolve(3); };
const promise2 = () => { console.log(42); return 42; };
const promise3 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('0 foo');
    resolve();
  }, 1000, 'foo');
});
const promise4 = () => {
  console.log('promise4');
  return 'promise 4 fn';
};

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
promiseLimit([promise1, promise2, promise3, promise4], 2);

let i = 0;
function generateRequest () {
  const j = ++i;
  return function request () {
    return new Promise(resolve => {
      console.log(`r${j}...`, 1000 * j);
      setTimeout(() => {
        resolve(`r${j}`);
      }, 1000 * j);
    });
  };
}
const requestPool = [generateRequest(), generateRequest(), generateRequest(), generateRequest()];

async function main () {
  const results = await promiseLimit(requestPool, 2);
  console.log(results);
}
main();

// 边界问题、最小值问题补全、红包的总金额比人数少。
// 异常 0.04 分 5 个人。
// 比较推荐抛异常，捕捉异常。可以分析验证

// [8, -83.96167576974295, 18, 30, 9];

// 国际化电商，国内市场存量市场。
// 海外电商。
// titok 电商，跟主播带货协议。独立的电商产品。独立产品开发。交易中台、支付中台、运营中台、营销中台。
// 搭建系统。
// 团队前端 40 多人。
// 招聘速度赶不上 headcount。
// 500 多个研发。北京、上海、杭州、新加坡。

// const readline = require('readline');
// const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
// });
// rl.on('line', function(data){
//    console.log(data);
// })
console.log('Hello World!');

// 边界问题、最小值问题补全、红包的总金额比人数少。
// 异常 0.04 分 5 个人。
// 比较推荐抛异常，捕捉异常。可以分析验证

const MIN_VALUE = 1;
function getRedPackages (total, count) {
  if (total / count < MIN_VALUE) {
    throw new Error('异常，金额均分仍小于最小值');
  }
  const arr = [];
  const res = [];
  let tmpTotal = 0;
  let maxIndex = 0;
  let maxValue = 0;
  let minIndex = 0;
  let minValue = 0;
  for (let i = 0; i < count; i++) {
    // +1 避免边界是 0 的情况。
    const tmp = Math.random() * 100 + 1;
    tmpTotal += tmp;
    arr.push(tmp);
  }
  let anotherTmpTotal = 0;
  arr.forEach((item, index) => {
    const itemValue = Math.max(Math.floor(item / tmpTotal * total), MIN_VALUE);
    if (maxValue < itemValue) {
      maxValue = itemValue;
      maxIndex = index;
    }
    if (minValue > itemValue) {
      minValue = itemValue;
      minIndex = index;
    }
    anotherTmpTotal += itemValue;
    res.push(itemValue);
  });
  if (anotherTmpTotal === total) {
    // skip
  } else if (anotherTmpTotal > total) {
    res[maxIndex] = res[maxIndex] - (anotherTmpTotal - total);
  } else if (anotherTmpTotal < total) {
    res[minIndex] = res[minIndex] - (anotherTmpTotal - total);
  }
  return res;
}

console.log(getRedPackages(4, 5));

// 题目描述
// 1. 实现一个方法，判断任意一个字符串，是否是一个合法的Ipv4地址。如果是就返回true,否则返回false。

// tips：合法的ipv4是什么样子的？
// 1. 分四段，中间是用.分割
// 2. 每一段都是数字。
// 3. 数字的大小，首段(0, 255]，后面3段是[0,255]
// 4. 不能有前导0.    01.002.03.3 不符合预期

function isIpv4 (str) {
  if (!str) return false;
  const arr = str.split('.');
  if (arr.length !== 4) return false;

  const isIpv4Value = true;
  for (let i = 0; i < arr.length; i++) {
    const item = parseInt(arr[i]);
    if (item > 255) {
      return false;
    }
    if (i === 0 && item <= 0) {
      return false;
    }
    if (i > 0 && item < 0) {
      return false;
    }
    if (String(item) !== arr[i]) {
      return false;
    }
  }
  return isIpv4Value;
}

console.log(isIpv4('01.002.03.3'));
console.log(isIpv4('1.002.03.3'));
console.log(isIpv4('1.2.03.3'));
console.log(isIpv4('1.0.3.3'));
console.log(isIpv4('1.0.3'));
console.log(isIpv4('0.0.3.1'));
console.log(isIpv4('1.0.3.255'));
console.log(isIpv4('1.0.3.256'));
console.log(isIpv4('255.255.255.255'));
console.log(isIpv4('-255.255.255.255'));
console.log(isIpv4('255.a.255.255'));
console.log(isIpv4('1.0.0.0'));
console.log(isIpv4('1..1.1'));
