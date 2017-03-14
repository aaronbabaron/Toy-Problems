/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  // hold the largest value
  // sum up all values smaller than it in a counter
  // if new largest push onto array
  // for every element see which one its smaller than in sum array
  // add to smallest one
  
  var counter = 0;
  
  var sums = [];
  sums.push([nums[0], 1]);

  for (var i = 1; i < nums.length; ++i) {
    
    var twoX = nums[i] * 2;
    console.log(sums);

    for (var j = 0; j < sums.length; ++j) {
      console.log('is 2x', sums[j][0], twoX);
      if (twoX < sums[j][0]) {
        counter += sums[j][1];
      } else {
        break;
      }
    }

    if (nums[i] > sums[sums.length - 1][0]) {
      sums.push([nums[i], 1]);
    } else {
      for (var k = 0; k < sums.length; ++k) {
        if (sums[k][0] >= nums[i]) {
          ++sums[k][1]; 
          break;
        }
      }
    }
  }

  console.log(counter);
  return counter;
};

reversePairs([1, 3, 2, 3, 1]);
reversePairs([2, 4, 3, 5, 1]);
