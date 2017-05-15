var a = require('./lib/a');

a.sayHello();

var EventUtil = {
  addHandler: function(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, handler);
    } else {
      element['on' + type] = handler;
    }
  },
  removeHandler: function(element,type,handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent('on' + type, handler);
    } else {
      element['on' + type] = null;
    }
  }
};

EventUtil.addHandler(window, 'online', function(event){
  debugger;
  console.log(event);
});

EventUtil.addHandler(window, 'offline', function(event){
  debugger;
  console.log(event);
});

var move = require('./lib/move');
