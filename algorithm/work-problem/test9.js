function combine(arr) {
  // var arrFirst = [''];
//   for (var i = 0; i < arr.length; i++) {

//   }
  // return 'fix here 2'
  if (arr.length === 1) {
    return arr[0];
  }
  var temp = arr.shift();
  return getValue(temp, combine(arr));
}
function getValue(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return;
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  // var arr = [];
  var result = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      result.push(arr1[i] + '-' + arr2[j]);
    }
    // var value = arr1[i];
  }
  return result;
}

var res = combine([ ['a', 'b'], ['苹果', '梨', '香蕉'], ['红', '黑'] ])
console.log('res', res);


class Event{
  constructor() {
    this.stackMap = {};
  }

  // 绑定事件
  on(type, fn) {
    if (!this.stackMap[type]) {
      this.stackMap[type] = [];
    }
    this.stackMap[type].push(fn);
  }

  // 解绑事件
  off(type, fn) {
    if (fn) {
      this.stackMap[type] = this.stackMap[type].filter(item => item !== fn);
    } else {
      delete this.stackMap[type]
    }
  }

  // 绑定事件（只会触发一次）
  once(type, fn){
    const cb = (...args) => {
      fn.apply(this, args);
      this.off(type, cb);
    }
    if (!this.stackMap[type]) {
      this.stackMap[type] = [];
    }
    this.stackMap[type].push(cb);
    // this.on(type. cb);
  }

  // 触发事件
  emit(type, ...args){
    this.stackMap[type].forEach(fn => {
      fn.apply(this, args);
    })
  }
}

const event = new Event();

const cb = (...args) => {
  console.log('show', ...args);
};

// 绑定
event.on('show', cb);
// 绑定
event.once('show',(...args) => {
  console.log('showOnce', ...args);
});

// 触发
event.emit('show', 'param1', 'param2');
// 打印 show param1 param2
// 打印 showOnce param1 param2

// 触发
event.emit('show', 'param3', 'param4');
// 打印 show param3 param4

event.off('show', cb);
console.log('end show...2')

event.emit('show');
// 没有任何打印