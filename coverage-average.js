var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('coverage/coverage-summary.json', 'utf8'));

var {statements, branches} = obj.total;

var total = Number(statements.total || 0) + Number(branches.total || 0);
var covered = Number(statements.covered || 0) + Number(branches.covered || 0);

var coverage = `${(covered/total * 100).toFixed(2)}%`;
console.log('coverage: ', coverage);
