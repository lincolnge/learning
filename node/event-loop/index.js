/**
 * 这就清楚了，挂在 uv_idle_start 里的 callback 会比挂在 uv_check_start 里的靠前执行。他俩中间估摸着是 io 轮询的 callback 执行。所以吧，第二个不同点就出现了——nextTick 用 uv_idle_start 挂的，它的callback function 最早被call，然后 io 的，最后是 setImmediate 的 callback function 被 call。费那么大劲儿，偶闲的想抬杠的其实是，人家里头没有队这种数据结构，也就没加到队首和队尾一说…… 其实看起来是写死的代码执行顺序而已。

作者：貘吃馍香
链接：https://www.zhihu.com/question/23028843/answer/34594257
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
setImmediate(function A() {
  console.log(11);
  setImmediate(function B(){console.log(22);});
});


setTimeout(function timeout() {
  console.log('TIMEOUT FIRED x');
}, 0);

process.nextTick(function A() {
  console.log(1);
  process.nextTick(function B(){console.log(2);});
});

setTimeout(function timeout() {
  console.log('TIMEOUT FIRED');
}, 0)

