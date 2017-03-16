/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// [5, 7, 13, 47] $1.30
// 

// recursively iterate through the coins and create decision tree with each possible subtraction of coins and the next coin after

// remove front coin from  
var coinChange = function(coins, amount, count, fewestCoins) {
  coins = coins.sort((a, b) => a - b);
  var isFirst = count === undefined ? true : false;


  count = count || 0; 
  fewestCoins = fewestCoins || Infinity;

  var numTimes = Math.floor(amount / coins[coins.length - 1]);
  var completedRun;

  if (numTimes === 0 && amount > 0 && coins.length === 1) {
    fewestCoins = Infinity;
  }

  for (var i = numTimes; i >= 0; --i) {
    var amt = amount - coins[coins.length - 1] * i;
    var currentCoins = count + i;


    if (currentCoins > fewestCoins) return fewestCoins;

    if (amt === 0 && currentCoins < fewestCoins) {
      return currentCoins;
    } else if (amt > 0) {
      completedRun = coinChange(coins.slice(0, coins.length - 1), amt, currentCoins, fewestCoins); 

      if (completedRun < fewestCoins) {
        fewestCoins = completedRun;
      }
    }
  }


  return isFirst && fewestCoins === Infinity ? -1 : fewestCoins;
};

