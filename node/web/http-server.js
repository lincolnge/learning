var http = require('http');
http.createServer(function(req, resEnd) {
  // res.setHeader('Test2', '1');
  // res.setHeader('test', '2');
  // res.setHeader('Content-Type', 'text/json');
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:1111');
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
  // res.setHeader('Access-Control-Allow-Methods', '*');
  // res.setHeader('Access-Control-Allow-Credentials', true);
  // res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Headers', '*');

  // res.setHeader("Set-Cookie", ["type=ninja", "language=javascript"]);
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.writeHead(200);
  // res.end('Hello World 123\n');
  // res.end('{"code":1}');
  http.get('http://nodejs.org/dist/index.json', (resp) => {
    // A chunk of data has been recieved.
    var data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      // console.log(JSON.parse(data));
      resEnd.setHeader('Content-Type', 'application/octet-stream');
      // resEnd.setHeader('Content-Disposition', 'attachment')

      resEnd.end(data)
    });
  });
  // console.log('res2', res2)
}).listen(1337, '127.0.0.1');
console.log('Server running');