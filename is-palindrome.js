/*
  Palindrome
  -------------
  Time Complexity - O(n)

  @params {string}
  @return boolean
*/

var isPalindrome = function(word) {
  word = word.replace(/\W/g, "").toLowerCase();
  return (word === word.split("").reverse().join(""));
};
