// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].




function largestOfFour(vargjetMeNumra){
    let varguMax=[];

    for(let vargu of vargjetMeNumra){
        let max=vargu[0];
        for(let num of vargu){
            if(num > max){
                max=num;
            }
        }
        varguMax.push(max);
    }
    return varguMax
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

