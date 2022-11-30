// Return the length of the longest word in the provided sentence.

// Your response should be a number (length of a largest string).

<<<<<<< HEAD
function findLongestWordLength(fjalija) {
    varguMeFjale = fjalija.split(" "); 
    max=0;

    for(let i=0; i<varguMeFjale.length; i++){
        if(varguMeFjale[i].length > max){
            max=varguMeFjale[i].length;
        }
    }

   return max
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
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
>>>>>>> d909caa1376ee899fd840ff8e3358c8ec2e08cff
