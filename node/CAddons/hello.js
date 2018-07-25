// hello.js
const addon = require('./build/Release/testHello');

console.log(addon.hello());

// Prints: 'world'