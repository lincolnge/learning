var moveCls = document.querySelector('.moveCls');
console.log(moveCls, 'eeee');
moveCls.style.backgroundColor = 'yellow';

var body = document.querySelector('body');
var isShow = false;

body.addEventListener('mousemove', showCoords);

moveCls.addEventListener('mousedown', function(e) {
  console.log('mousedown', e);
  isShow = true;
});

moveCls.addEventListener('mouseup', function(e) {
  console.log('mouseup', e);
  isShow = false;
});

body.addEventListener('mouseup', function(e) {
  console.log('body mouseup', e);
  isShow = false;
});

function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coords = 'X coords: ' + x + ', Y coords: ' + y;
  var width = document.querySelector('.moveCls').offsetWidth;
  var height = document.querySelector('.moveCls').offsetHeight;
  if (isShow) {
    throttle(() => {
      moveCls.style.position = 'fixed';
      moveCls.style.top = y - height / 2 + 'px';
      moveCls.style.left = x - width / 2 + 'px';
      console.log('coords', coords);
    }, 50, 100)();
  }
}

var debounce = function(fn, wait) {
  // 只有在执行函数的请求停止了一段时间之后才执行。
  var timer = null;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function(){
      fn.apply(context, args);
    }, wait);
  };
};

var throttle = function(fn, delay, mustRunDelay) {
  // 一段时间执行一次
  var timer = null;
  var t_start;
  return function(){
    var context = this;
    var args = arguments;
    var t_curr = +new Date();
    if (!t_start) {
      t_start = t_curr;
    }
    clearTimeout(timer);
    if (t_curr - t_start >= mustRunDelay) {
      fn.apply(context, args);
      t_start = t_curr;
    } else {
      timer = setTimeout(function(){
        fn.apply(context, args);
      }, delay);
    }
  };
};
// http://www.alloyteam.com/2012/11/javascript-throttle/
