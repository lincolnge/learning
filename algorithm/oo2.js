function Person() {
	this.friend = [1,3];
}

// Person.prototype.name = 'N';
// Person.prototype.age = 29;
Person.prototype = {
	constructor: Person,
	name: 'N',
	age: 29
};

var friend1 = new Person();
var friend2 = new Person();

for (var oo in friend1) {
	console.log('oo', oo);
}
console.log('obj keys', Object.keys(friend1));
console.log('obj get p names', Object.getOwnPropertyNames(Person.prototype));


console.log(friend1 instanceof Object);
console.log(friend1 instanceof Person);
console.log(friend1.constructor ===  Person);
console.log(friend1.constructor ===  Object);

console.log('friend1.friend === friend2.friend', friend1.friend === friend2.friend);


[1, 2, 3].every((i) => i > 2);


var re = null;
var i = 0;
for (i=0; i < 10; i++){
	re = /cat/g;
	console.log(re.test("catastrophe"));
}

for (i=0; i < 10; i++){
	re = new RegExp('cat', 'g');
	console.log(re.test("catastrophe"));
}

console.log(sum(10,10));
console.log(sum2(10,10));
var sum2 = function sum(num1, num2) {
	return num1 + num2;
};