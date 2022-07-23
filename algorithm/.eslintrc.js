// http://eslint.org/docs/user-guide/configuring eslint-disable

module.exports = {
  extends: 'standard',
  rules: {
    // 'no-var': 0, // 禁用var，用let和const代替
    semi: ['error', 'always'], // 代码需要以分号结尾
    'comma-dangle': ['warn', 'always-multiline'], // 逗号结尾
    'no-unused-vars': 0, // 禁止未使用过的变量
    // indent: ['error', 2] // 2 个空格缩进
  },
};
