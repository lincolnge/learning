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
	// 0-1
	// this.length = size;
	// this.width = size;
	// 0-2
	Rectangle.call(this, size, size);
}

// 1-1
Square.prototype = new Rectangle();
Square.prototype.constructor = Square;

// 1-2
// Square.prototype = Object.create(Rectangle.prototype, {
// 	constructor: {
// 		configurable: true,
// 		enumerable: true,
// 		value: Square,
// 		writable: true
// 	}
// });

Square.prototype.toString = function() {
	// 2-1
	// return "[Square " + this.length + "x" + this.width + "]";
	// 2-2
	var text = Rectangle.prototype.toString.call(this);
	return text.replace('Rectangle', 'Square');
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
