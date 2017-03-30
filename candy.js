/**
 * @param {number[]} ratings
 * @return {number}
 */

var candy = function(ratings) {
  // false includes ===
  var peakCandies = Infinity;
  var count = 1;
  var candies = 1;
  var goingUp = ratings[0] < ratings[1];

  for (var i = 1; i < ratings.length; ++i) {
    if (ratings[i - 1] === ratings[i]) {
      candies = 1;
      goingUp = ratings[i] < ratings[i + 1];

      count += candies;
//      console.log('hi equals', count, candies, "num", ratings[i]);
    } else if (goingUp && ratings[i - 1] > ratings[i] ||
              !goingUp && ratings[i - 1] < ratings[i]) {
      goingUp = !goingUp;
      peakCandies = goingUp ? Infinity : candies;
      candies = goingUp ? 2 : 1;

      count += candies;
 //     console.log('hi swapping', count, candies, "num", ratings[i]);

    } else {
      ++candies;
      count += candies;

      if (peakCandies <= candies && !goingUp) {
        console.log('adding more candies huhu', peakCandies, candies, ratings[i]);
        ++count;
      }
  //    console.log('hi candies', count, candies, "num", ratings[i]);
    }

  }

  console.log(count);
  return count; 
};


//candy([2,0,2]); // 5
//candy([2,3,2]); // 4
//candy([1,3,4,3,2,1]) // 13
//candy([4,2,3,4,1]) // 9
//candy([2, 2, 1]) // 4
//candy([5,1,1,1,10,2,1,1,1,3]) // 15
