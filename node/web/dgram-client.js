var dgram = require('dgram');

var message = new Buffer('Node.js');
var client = dgram.createSocket('udp4');

// 发送，Buffer、Buffer 的长度、目标端口、目标地址、回调。
client.send(message, 0, message.length, 41234, 'localhost', function() {
  client.close();
});