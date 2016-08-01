/*
  Palindrome
  -------------

  @params {string}
  @return boolean
*/

var isPalindrome = function(word) {
  var reversedWord = word.split("").reverse().join("");

  if (word === reversedWord) return true

  return false;
};
