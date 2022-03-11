/**
 * Read Files with Node.js
 * https://stackabuse.com/read-files-with-node-js/
 */

const http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // res.end('Hello World');
  
  console.log('req.url', req.url);

  var fileName = `.${req.url}`;
  if (req.url === '/favicon.ico') return;
  if (req.url === '/223') {
    // res.setHeader('Content-Type', 'image/jpeg');
    // res.writeHead(200, {'Content-Type': 'image/jpeg'});
    fs.createReadStream(fileName).pipe(res);
    return;
  }
  if (req.url === '/123.jpeg') {
    // res.setHeader('Content-Type', 'image/jpeg');
    // res.writeHead(200, {'Content-Type': 'image/jpeg'});
    fs.createReadStream(fileName).pipe(res);
    return;
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    fileName = './index.html';
  }
  var readStream = fs.createReadStream(fileName, 'utf8');
  var data = '';
  // readStream.on('data', function(chunk) {
  //   data += chunk;
  // }).on('end', function() {
  //   // console.log(data);
  //   res.end(data);
  // });

  readStream.pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
