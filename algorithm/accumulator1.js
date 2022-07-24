function tco (f) {
  let value;
  let active = false;
  const accumulated = [];

  return function accumulator () {
    accumulated.push(arguments);
    if (!active) {
      active = true;
      while (accumulated.length) {
        value = f.apply(this, accumulated.shift());
      }
      // active = false;
      return value;
    }
  };
}

const sum = tco(function (x, y) {
  if (y > 0) {
    return sum(x + 1, y - 1);
  } else {
    return x;
  }
});

sum(1, 100000);
