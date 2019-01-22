function add(x, y) {
  // if (!testIf(false)) {
  //   console.log('123')
  // }
  return x + y;
}

function minus(x, y) {
  // if (testIf(true)) {
  //   console.log(1);
  // }
  return x - y;
}

function testIf(isTrue) {
  if (isTrue) {
    console.log('true');
    return true;
  } else {
    console.log('false');
    return false;
  }
}

module.exports = {
  add,
  minus,
  testIf
};
