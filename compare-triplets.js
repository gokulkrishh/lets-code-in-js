/*
  Compare triplets
  -------------

  Link: https://www.hackerrank.com/challenges/compare-the-triplets

  @params {array, array}
  @return {property: value, property: value}
*/

var compareTriplets = function(arr1, arr2) {

  var foo = 0, bar = 0;

  if (arr1.length !== arr2.length) return false;

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
       foo += 1;
    }
    else if (arr1[i] < arr2[i]) {
      bar += 1;
    }
  }

  return { foo: foo, bar: bar };
};
