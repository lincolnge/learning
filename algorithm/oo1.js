// 面向对象

function Person() {
	var o = new Object();
	o.friend = [1,3];
	return o;
}

var p1 = new Person();


var obj = {
	toString: function() {
		return 'My o';
	}
};

for (var o in obj) {
	console.log('o', o);
}



x = {a: 1, b: 2};
y = {b: 2, a: 1};

JSON.stringify(x) === JSON.stringify(y)
Object.is(x, y);






[{}, {}, {}].map((item, i) => {console.log(item, i)});