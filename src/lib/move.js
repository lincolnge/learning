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
      moveCls.style.position = 'fixed';
      moveCls.style.top = y - height / 2 + 'px';
      moveCls.style.left = x - width / 2 + 'px';
      console.log('coords', coords);
    }
}
