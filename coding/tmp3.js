// var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];

var number = 15;

Array.from(Array(number)).map(function(_, i) {
  var num = i + 1;
  if (num%15 == 0) return 'fizz buzz';
  else if (num%3 == 0) return'fizz ';
  else if (num%5 == 0) return'buzz';
  return num;
});