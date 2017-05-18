function Rectangle(length, width) {
	this.length = length;
	this.width = width;
}

Rectangle.prototype.getArea = function() {
	return this.length * this.width;
};

Rectangle.prototype.toString = function() {
	return "[Rectangle " + this.length + "x" + this.width + "]";
}

function Square(size) {
	this.length = size;
	this.width = size;
}

// 1
Square.prototype = new Rectangle();
Square.prototype.constructor = Square;

// 2
// Square.prototype = Object.create(Rectangle.prototype, {
// 	constructor: {
// 		configurable: true,
// 		enumerable: true,
// 		value: Square,
// 		writable: true
// 	}
// });

Square.prototype.toString = function() {
	return "[Square " + this.length + "x" + this.width + "]";
}

var rect = new Rectangle(5, 10);
var square = new Square(6);

console.log(rect.toString());
console.log(square.toString());

console.log(rect instanceof Rectangle);
console.log(rect instanceof Object);

console.log(square instanceof Square);
console.log(square instanceof Rectangle);
console.log(square instanceof Object);
