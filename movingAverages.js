function getMovingAverage(k, arr) {
  var lowestIdx = 0;
  var sum = 0;

  for (let i = 0; i < k; ++i) {
    sum += arr[i];
  }

  for (let i = k; i < arr.length; ++i) {
    console.log(sum / k);

    sum -= arr[lowestIdx];
    sum += arr[i];

    ++lowestIdx;
  }
}
