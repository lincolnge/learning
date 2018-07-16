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
