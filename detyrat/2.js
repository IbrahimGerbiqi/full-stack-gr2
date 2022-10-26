// Return the length of the longest word in the provided sentence.

// Your response should be a number (length of a largest string).

function findLongestWordLength(str) {
    let longest =0;
    for(word of str){
        longest = str.slice();
    }
    return longest;


    // return str.sort((a, b) =>
    //     b.findLongestWordLength - a.findLongestWordLength
    // )
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");

console.log(findLongestWordLength());