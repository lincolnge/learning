var a = require('./a');

console.log('in a', a);

exports.module = {
    say: function() {
        console.log('b say');
    }
}
