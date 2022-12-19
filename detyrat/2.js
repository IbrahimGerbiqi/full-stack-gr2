// Return the length of the longest word in the provided sentence.

// Your response should be a number (length of a largest string).
const prompt = require('prompt-sync')()

<<<<<<< HEAD
function findLongestWordLength() {
    const sentence = prompt('Enter a sentence: ')
    const longest = sentence.split(' ').sort(function (a, b) {
        return b.length - a.length
    })
    return `The longest word is "${longest[0]}", with a length of ${longest[0].length} characters.`
}

console.log(findLongestWordLength())

=======
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
>>>>>>> 59c66b2518037919e7a6f9e113af30a8374ec844
