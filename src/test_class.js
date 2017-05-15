console.warn('hello class!');
const storeLog = console.log;

// console.log = console.assert;
// console.warn = console.assert;
// console.error = console.assert;

class VersionedArray extends Array {
  constructor() {
    super();
    this.history = [[]];
  }
  commit() {
    this.history.push(this.slice());
  }
  revert() {
    this.splice(0, this.length, ...this.history[this.history.length - 1]);
  }
}

const x = new VersionedArray();

x.push(1);
x.push(2);
console.log('x', x.commit) // [1, 2]
console.log(x.history) // [[]]

// x.commit();
console.log(x.history) // [[], [1, 2]]
x.push(3);
console.log(x) // [1, 2, 3]

// x.revert();
console.log(x) // [1, 2]


// https://stackoverflow.com/questions/36203614/super-does-not-pass-arguments-when-instantiating-a-class-extended-from-object/36204599#36204599
// babel 的部分结果与 V8 不一样，这个需要关注一下。
class NewObj extends Object{
  constructor(){
    super(...arguments);
  }
}
var o = new NewObj({attr: true});
console.log('o.attr === true', o.attr === true);  // false

// require("babel-core/register");
require("babel-polyfill");
class Foo {
  constructor(...args) {
    this.args = args;
  }
  * [Symbol.iterator]() {
    for (let arg of this.args) {
      yield arg;
    }
  }
}

for (let x of new Foo('hello', 'world')) {
  console.log('new Foo()', x);
}

console.log('\n\n\n');


//定义类
const bar = Symbol('bar');
const snaf = Symbol('snaf');

class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.foo = (baz) => {
      this[bar](baz);
      return this[snaf];
    }
    this[bar] = (baz) => {
      return this[snaf] = baz;
    }
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

  // // 公有方法
  // foo (baz) {
  //   this[bar](baz);
  //   return this[snaf];
  // }
  //
  // // 私有方法
  // [bar](baz) {
  //   return this[snaf] = baz;
  // }

}

class ColorPoint extends Point {
  /**
   * 子类必须在constructor方法中调用super方法，
   * 否则新建实例时会报错。这是因为子类没有自己的this对象，
   * 而是继承父类的this对象，然后对其进行加工。
   * 如果不调用super方法，子类就得不到this对象。
   **/
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
    this.c = 2;
    super.c = 3;
    console.log('ct un', super.c); // undefined
    console.log('ct c', this.c); // 3 是 2，和书上写的结果不一样。
    console.log('super.valueOf() instanceof Point', super.valueOf() instanceof Point); // true
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}

const cp = new ColorPoint(1, 2, 'blue');

console.log('cp toString', cp.toString());
console.log(cp instanceof ColorPoint);
console.log(cp instanceof Point);
console.log('Object.getPrototypeOf(ColorPoint) === Point', Object.getPrototypeOf(ColorPoint) === Point);

/**
 * 这两条继承链，可以这样理解：作为一个对象，子类（B）的原型（__proto__属性）是父类（A）；
 * 作为一个构造函数，子类（B）的原型（prototype属性）是父类的实例。
 **/
console.log(ColorPoint.__proto__ === Point);
console.log(ColorPoint.prototype.__proto__ === Point.prototype);
// function bar(baz) {
//   console.log('xxx', baz);
//   return this.snaf = baz;
// }

const px = new Point();
const { foo } = px;
// console.log('baz', px.foo(123));
console.log('baz', foo(444));

var point = new Point(2, 3);

// console.log(point.toString()) // (2, 3)

var p1 = new Point(2,3);
var p2 = new Point(3,2);

// console.log('xxx p1.__proto__ === p2.__proto__', p1.__proto__ === p2.__proto__);

const MyClass = class Me {
  getClassName() {
    return Me.name;
  }
};

// console.log('MyClass xx', new MyClass().getClassName());

let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    // console.log(this.name);
  }
}('张三');
person.sayName()
// console.log('person person');

p1.__proto__.printName = function () { return 'Oops' };

// console.log(p1.printName()) // "Oops"
// console.log(p2.printName()) // "Oops"

var p3 = new Point(4,2);
// console.log(p3.printName()) // "Oops"

// console.log(point.hasOwnProperty('x')) // true
// console.log(point.hasOwnProperty('y')) // true
// console.log(point.hasOwnProperty('toString')) // false
// console.log(point.__proto__.hasOwnProperty('toString')) // true

console.error('end class!');
console.log = storeLog;
