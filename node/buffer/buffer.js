var http = require('http');
var helloworld = '';

for (var i = 0; i < 1024 * 10; i ++) {
  helloworld += 'a';
}

// 做一个传输使用 buffer 要比，传输使用字符串快很多的测试。
helloworld = new Buffer(helloworld);

http.createServer(function(req, res) {
  res.writeHead(200);
  res.end(helloworld);
}).listen(8001);