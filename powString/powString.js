/* Write a function that takes two integers as strings as input
 * and returns the first to the power of the second
 * as a string
 *
 *
 */

function pow(x, y) {
  var total = x;

  if (x === '1' || y === '0') return '1';

  for (var i = 1; i < y; ++i) {
    total = multiply(total, x);
  }

  return total;
}

function multiply(x, y) {
  var isNeg = false;
  var total = x;

  if (x.charAt(0) === '-') {
    isNeg = !isNeg;
    x = x.substring(1);
  }

  if (y.charAt(0) === '-') {
    isNeg = !isNeg;
    y = y.substring(1);
  }

  if (x === '0' || y === '0') return '0';

  for (var i = 1; i < y; ++i) {
    total = add(total, x); 
  }

  return isNeg ? '-' + total : total;
}

function add(x, y) {
  var carry = 0;
  var longer = x.length > y.length ? x.split('') : y.split('');
  var shorter = x.length > y.length ? y.split('') : x.split('');

  while (shorter.length < longer.length) {
    shorter.unshift('0');
  }
  
  for (var i = shorter.length - 1; i >= 0; --i) {
    var sum = parseInt(longer[i]) + parseInt(shorter[i]) + carry;

    longer[i] = '' + sum % 10;
    carry = Math.floor(sum / 10);
  }

  if (carry === 1) longer.unshift('1');

  return longer.join('');
}


console.log(pow('-3', '2'));
