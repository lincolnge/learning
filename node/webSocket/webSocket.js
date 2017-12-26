var socket = new WebSocket('ws://127.0.0.1:2010/updates');
socket.onopen = function() {
  setInterval(function() {
    if (socket.bufferedAmount == 0) {
      socket.send(getUpdateDate());
    }
  }, 50);
};
socket.onmessage = function(event) {
  // TODO:
};