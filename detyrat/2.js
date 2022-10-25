// Return the length of the longest word in the provided sentence.

// Your response should be a number (length of a largest string).

function findLongestWordLength(str) {
  let x = str.split(" ");
  let y = 0;
  for (let i in x) {
    if (x[i].length > y) {
      y = x[i].length;
    }
  }
  return y;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
