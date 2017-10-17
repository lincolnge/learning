var heapdump = require('heapdump');
var http = require('http');

var leakArray = [];
var leak = function() {
  leakArray.push('leak ' + Math.random());
};

// heapdump.writeSnapshot(function(err, filename) {
//   console.log('dump written to', filename);
// });


http.createServer(function(req, res) {
  for (var i = 0; i < 1000000; i++) {
    leak();
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337);

console.log('Server running at http://127.0.0.1:1337/');