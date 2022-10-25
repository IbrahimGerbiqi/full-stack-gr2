// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  let x = 0;
  let y = 0;
  let a = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j of arr[i]) {
      x += j;
    }
    if (x > y) {
      y = x;
      a = arr[i];
    }
  }
  return a;
}
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
