/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// [5, 7, 13, 47] $1.30
// 

// recursively iterate through the coins and create decision tree with each possible subtraction of coins and the next coin after

// remove front coin from  
var coinChange = function(coins, amount, count) {
  count = count || 0; 
  var numTimes = amount / coins[0];
  var fewestCoins = Infinity;
  var completedRun;

  if (numTimes === 0 && amount > 0 && coins.length === 1) {
    return Infinity;
  }

  for (var i = 0; i <= numTimes; ++i) {
    var amt = amount - coins[0] * i;
    var currentCoins = count + i;

    if (amt === 0 && currentCoins < fewestCoins) {
      fewestCoins = currentCoins; 
    } else if (amt > 0) {
      completedRun = coinChange(coins.slice(1), amt, currentCoins); 

      if (completedRun < fewestCoins) {
        fewestCoins = completedRun;
      }
    }
  }

  return fewestCoins === Infinity ? - 1 : fewestCoins;
};
