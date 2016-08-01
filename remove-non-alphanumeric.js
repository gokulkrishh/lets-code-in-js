/*
  Remove non-alphanumeric characters from a string
  -------------

  @params {string}
  @return string
*/

var removeNonAlphanumeric = function(word) {
  return word.replace(/\W/g, ""); // \W === [^0-9a-zA-Z_], g = global search
};
