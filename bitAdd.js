function bitAdd(x, y) {
  var smaller = x.length < y.length ? x : y;
  var larger = y.length < x.length ? y : x;
  var extension = '';

  for (var i = 0; i < larger.length - smaller.length; ++i) {
    extension += '0'; 
  }

  smaller = '0' + extension + smaller;
  larger = '0' + larger;

  var carry = 0;
  var num = [];

  for (var i = larger.length - 1; i >= 0; --i) {
    var first = parseInt(larger[i]);
    var second = parseInt(smaller[i]);

    num.unshift('' + (carry + first + second) % 2);
    carry = Math.floor((first + second + carry) / 2);
  }

  return num.join('');
}


console.log(bitAdd('00011', '01101'));
