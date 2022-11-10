// Return the length of the longest word in the provided sentence.

// Your response should be a number (length of a largest string).

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