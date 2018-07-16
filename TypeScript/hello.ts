function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = '[0, 1, 2]';
console.log(sayHello(user));

let isDone: boolean = false;

console.log('isDone', isDone);
if (isDone) {
    console.log('133')
}


function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

reverse(132)
reverse('132')
