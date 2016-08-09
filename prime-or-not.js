/*
  Prime Number or Not
  -------------

  @params {number}
  @return boolean
*/

var primeOrNot = function(num) {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};
