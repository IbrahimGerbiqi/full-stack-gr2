// Return the length of the longest word in the provided sentence.

// Your response should be a number (length of a largest string).

function findLongestWordLength(str) {
  var strSplit = str.split(" ");
  var longestWord = 0;
  for (i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > longestWord) {
      longestWord = strSplit[i].length;
    }
  }
  return longestWord;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
