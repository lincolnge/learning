process.on('SIGTERM', function() {
  console.log('Got a SIGTERM....');
  process.exit(1);
});
console.log('server unning with PID:', process.pid);
process.kill(process.pid, 'SIGTERM');
