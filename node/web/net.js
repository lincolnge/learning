var net = require('net');

var server = net.createServer(function(socket) {
  socket.on('data', function(data) {
    socket.write('hello 123');
  });

  socket.on('end', function() {
    console.log('end 123');
  });
  socket.write('welcome!! 123');

  // socket.pipe(socket);
});

server.listen(8124, function() {
  console.log('server bound');
});

// server.listen('/tmp/echo.sock');
