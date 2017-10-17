var fs = require('fs');
var iconv = require('iconv-lite');

var rs = fs.createReadStream('../README.md', {highWaterMark: 11});
// rs.setEncoding('utf8');

var data = '';
var chunks = [];
var size = 0;
rs.on('data', function(trunk) {
  console.log('\n on \n', trunk);
  data += trunk;
  chunks.push(trunk);
  size += trunk.length;
});
rs.on('end', function() {
  console.log('end data\n', data);
  var buf = Buffer.concat(chunks, size);
  var str = iconv.decode(buf, 'utf8');
  console.log('end data\n', str);
  console.log('chunks is Array', Array.isArray(chunks));
;})