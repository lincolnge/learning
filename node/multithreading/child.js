var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('handled by child, pid is ' + process.pid + '\n');
})
process.on('message', function(m, tcp) {
  if (m === 'server') {
    tcp.on('connection', function(socket) {
      // socket.end('handled by child, pid is ' + process.pid + '\n');
      server.emit('connection', socket);
    });
  }
});
