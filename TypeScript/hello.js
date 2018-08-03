function sayHello(person) {
    return 'Hello, ' + person;
}
var user = '[0, 1, 2]';
console.log(sayHello(user));
var isDone = false;
console.log('isDone', isDone);
if (isDone) {
    console.log('133');
}
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
reverse(132);
reverse('132');
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
var tom = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};
console.log('tom', tom);
