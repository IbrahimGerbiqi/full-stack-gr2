// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

<<<<<<< HEAD



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

=======
function largestOfFour(arr) {
  largestNums = [0, 0, 0, 0];
  for (i = 0; i < arr.length; i++) {
    for (x = 0; x < arr[i].length; x++) {
      if (arr[i][x] > largestNums[i]) {
        largestNums[i] = arr[i][x];
      }
    }
  }
  return largestNums;
}
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
>>>>>>> d909caa1376ee899fd840ff8e3358c8ec2e08cff
