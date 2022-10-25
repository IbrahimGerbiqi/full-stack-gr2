// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.
// must use for loop

let arr_1 = [4, 6, 7];
let arr_2 = [8, 1, 9];

//result [12,7,16]
let sum = [];
let arr_3 = [];
let x = 0;
for (let i = arr_2.length - 1; i >= 0; i--) {
  arr_3.push(arr_2[i]);
}
for (let i of arr_1) {
  for (let j = 0; j < arr_3.length; j++) {
    x = arr_3[j];
  }
  sum.push(i + x);
  arr_3.pop();
}
console.log(sum);
