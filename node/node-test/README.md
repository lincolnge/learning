测试
====

单元测试(+)
----

测试代码的几个原则：

- 单一原则
- 接口抽象
- 层次分离

首先看 Node 自身存在的 assert 这个包。

  $ node test-assert.js

mocha 是一个测试框架，本身不参与测试。它主要是用来管理测试用例和生成测试报告。

describe(describe*)it

友好的测试框架

- 测试驱动开发（TDD）
- 行为驱动开发（BDD）

异步测试

代码覆盖率（从 jscover 到 istanbul）
<http://www.ruanyifeng.com/blog/2015/06/istanbul.html>

travis
<https://travis-ci.org/>

性能测试(+)
----

安全测试
----

功能测试
----

其他
----

  $ git submodule add https://github.com/mochajs/mocha.git
  $ git submodule update --init --recursive

ab Test
----

  # 说明百度做了防 ab test 的策略，百度可能是限制了总请求数
  $ ab -k -c 2 -n 5 http://www.baidu.com/

  # 猫眼是没有防护的。
  # 其中 -n10000 表示总请求数 -c800 表示并发用户数为 800
  $ ab -k -c80 -n1000 http://www.maoyan.com/
  $ ab -k -c80 -n1000 http://m.maoyan.com/

References
----

- <https://mochajs.org/>
- <https://segmentfault.com/a/1190000004627859>
