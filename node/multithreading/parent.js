var cp = require('child_process');
var child1 = cp.fork('child.js');
var child2 = cp.fork('child.js');

var server = require('net').createServer();
server.on('connection', function(socket) {
  // 关闭父进程后，这里不会再执行。
  socket.end('handled by parent\n');
});
server.listen(1337, function() {
  child1.send('server', server);
  child2.send('server', server);
  // 关掉父进程，完全让子进程处理。
  server.close();
})