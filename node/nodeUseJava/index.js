const java = require('java')
const javaLangSystem = java.import('java.lang.System')

javaLangSystem.out.printlnSync('Hello World!')

const HashMap = java.import('java.util.HashMap')
// 同步操作

let hashMap = new HashMap()

hashMap.putSync('name', 'SunilWang')
hashMap.putSync('age', 20)

let name = hashMap.getSync('name')
let age = hashMap.getSync('age')

console.log('name', name)
console.log('age', age)


const fs = require('fs');
const path = require('path');
// java.classpath.push(path.resolve(__dirname, './Java.jar'));

console.log(path.resolve('.'));
// var javaLangSystem = java.import('java.lang.System');

javaLangSystem.out.printlnSync('He333llo World');

// console.log('java.classpath', java.classpath)

var ver = javaLangSystem.getPropertySync("java.version");
console.log('ver', ver)
