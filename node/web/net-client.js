var net = require('net');

var client = net.connect({port: 8124}, function() {
  console.log('client connected!!');
  client.write('world!\r\n');
});

// var client = net.connect({path: '/tmp/echo.sock'});

client.on('data', function(data) {
  console.log(data.toString());
  client.end();
});

client.on('end', function() {
  console.log('client disconnected!');
});