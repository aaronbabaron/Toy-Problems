/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  var counter = 0;
  var isNeg = 1;
  var doublingStack = [1];
  var stack = [];
  
  if (dividend < 0) {
    dividend *= -1;
    isNeg *= -1;
  }

  if (divisor < 0) {
    divisor *= -1;
    isNeg *= -1;
  }

  stack.push(divisor);

  if (divisor === 1) {
    if (dividend > 2147483647 && isNeg > 0) dividend = 2147483647;
    return dividend * isNeg;
  }
  
  while (dividend > 0) {
    var lastItem = stack[stack.length - 1];

    while (stack.length > 0 && dividend - lastItem < 0) {
      stack.pop();
      doublingStack.pop();
      lastItem = stack[stack.length - 1];
    }

    if (doublingStack.length > 0)
      counter += doublingStack[doublingStack.length - 1];


    dividend -= lastItem
    if (dividend - lastItem >= lastItem) {
      doublingStack.push(doublingStack[doublingStack.length - 1] + doublingStack[doublingStack.length - 1]);
      stack.push(lastItem + lastItem);
    }
  }

  if (counter > 2147483647) {
    counter = 2147483647;
  }
  return isNeg * counter;
};
