/*
  Prime Number or Not
  -------------

  @params {number}
  @return boolean
*/


var primeOrNot = function(value) {
  var num = value.toFixed(); //To convert decimal to integer
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};
