var http = require('http');
http.createServer(function(req, res) {
  res.setHeader('Test2', '1');
  res.setHeader('test', '2');
  res.setHeader('Content-Type', 'text/json');
  res.setHeader("Set-Cookie", ["type=ninja", "language=javascript"]);
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.writeHead(200);
  res.end('Hello World 123\n');
}).listen(1337, '127.0.0.1');
console.log('Server running');