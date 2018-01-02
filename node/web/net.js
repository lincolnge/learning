var net = require('net');

/**
 * HTTP 协议中的 Transfer-Encoding
 * https://imququ.com/post/transfer-encoding-header-in-http.html
 */
var server = net.createServer(function(sock) {
  sock.on('data', function(data) {
    sock.write('HTTP/1.1 200 OK\r\n');
    sock.write('Transfer-Encoding: chunked\r\n');
    sock.write('\r\n');

    sock.write('b\r\n');
    sock.write('01234567890\r\n');

    sock.write('5\r\n');
    sock.write('12345\r\n');

    sock.write('0\r\n');
    sock.write('\r\n');
});

  // socket.on('end', function() {
  //   console.log('end 123');
  // });
  // socket.write('welcome!! 123');

  // socket.pipe(socket);
});

server.listen(8124, function() {
  console.log('server bound');
});

// server.listen('/tmp/echo.sock');
