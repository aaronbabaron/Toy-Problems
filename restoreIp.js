/**
 * @param {string} s
 * @return {string[]}
 * valid ip = each section is a byte (max 255)
 */
var restoreIpAddresses = function(s) {
  /* split up the string in increments of 1 2 3
   * must split into 4 pieces
   * check if each piece is valid by checking digits
   * could use 4 for loops tbh
   * recursive method would require a counter to know when to stop
   *
   */
  var valid = [];
  if (s.length < 4) return valid;

  for (var one = 1; one <= 3; ++one) {
    var numStr = s.substring(0, one);
    var currentNum = parseInt(numStr);

    if (currentNum > 255 || ( numStr[0] === '0' && numStr.length > 1 )) {
      continue;
    }

    var first = numStr + '.';

    for (var two = 1; two <= 3; ++two) {
      var numStr = s.substring(one, one + two);
      currentNum = parseInt(numStr);

      if (currentNum > 255 || ( numStr[0] === '0' && numStr.length > 1 )) {
        continue;
      }

      var second = first + numStr + '.';

      for (var three = 1; three <= 3; ++three) {
        var numStr = s.substring(one + two, one + two + three)
        currentNum = parseInt(numStr);

        if (currentNum > 255 || ( numStr[0] === '0' && numStr.length > 1 )) {
          continue;
        }

        var third = second + numStr + '.';

        for (var four = 1; four <= 3; ++four) {
          var numStr = s.substring(one + two + three, one + two + three + four);
          currentNum = parseInt(numStr);

          if (numStr.length < 1 || currentNum > 255 || ( numStr[0] === '0' && numStr.length > 1 )) {
            continue;
          }
          
          var ip = third + numStr;

          if (s.length + 3 === ip.length && !valid.includes(ip)) valid.push(ip);
        }
      }
    }
  }

  return valid;
};

//console.log(restoreIpAddresses('0000'))
//console.log(restoreIpAddresses('010010')) //["0.10.0.10","0.100.1.0"]
