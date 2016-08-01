/*
  Linear search
  -------------
  Time Complexity - O(n)

  @params {array, index}
  @return number
*/

var linearSearch = function(arr, searchNum) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === searchNum) {
      return i;
    }
  }

  return -1;
};
