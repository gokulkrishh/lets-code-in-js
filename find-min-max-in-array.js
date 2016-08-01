/*
  Find minimum and maximum value in an array
  -------------

  @params {array}
  @return number
*/

var findMax = function(arr) {
  return Math.max.apply(null, arr);
};

var findMin = function(arr) {
  return Math.min.apply(null, arr);
};
