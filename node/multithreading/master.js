// 根据 cpus 核数创建进程数。
// netstat -ant | awk '$6 == "LISTEN"' # 获取本地开发使用的端口。
var fork = require('child_process').fork;
var cpus = require('os').cpus();
for (var i = 0; i < cpus.length; i++) {
  fork('./worker.js');
}

// 以下四种方式皆可创建进程。
// var cp = require('child_process');

// cp.spawn('node', ['worker.js']);
// cp.exec('node worker.js', function(err, stdout, stdeer) {
//   // some code
// });

// cp.execFile('worker.js', function(err, stdout, stderr) {
//   // some code
// });

// cp.fork('./worker.js');