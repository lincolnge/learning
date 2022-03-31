

function getNewArry(arr) {
  if (!arr || !arr.length) return [];
  var res = [arr[0]];
  for (var i = 0; i < arr.length; i++) {
    // contains
    if (res.indexOf(arr[i]) === -1) {
      // TODO
      res.push(arr[i]);
    }
    for (var j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        break;
      }
      if (j === res.length - 1) {
        res.push(arr[i]);
      }
    }
  }
  return res;
}

var arr = [1,2,1,3,4,5,3,2];
console.log(getNewArry(arr));
console.log(getNewArry([1,1,1,]));
console.log(getNewArry([]));
