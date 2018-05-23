var b = require('./b');

console.log('in b', b);

exports.module = {
    say: function() {
        console.log('a say');
    }
}
