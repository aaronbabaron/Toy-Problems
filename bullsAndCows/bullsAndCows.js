var getHint = function(secret, guess) {
  var bulls = 0;
  var cows = 0;

  secret = secret.split('');
  guess = guess.split('');

  for (var i = 0; i < secret.length; ++i) {
    if (secret[i] === guess[i]) {
      ++bulls;
      secret[i] = null;
      guess[i] = null;
    }
  }

  for (var i = 0; i < secret.length; ++i) {
    var charIdx = secret.indexOf(guess[i]);

    if (guess[i] && charIdx !== -1) {
      secret[charIdx] = null;
      ++cows;
    }
  }

  return bulls + 'A' + cows + 'B';
}
