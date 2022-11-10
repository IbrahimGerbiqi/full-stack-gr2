// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.
// must use for loop

let arr_1 = [4, 6, 7];
let arr_2 = [8, 1, 9];

let i=0;
let newArr=[];

for(i=0; i<arr_1.length; i++){
    newArr[i]=arr_1[i]+arr_2[i];
}
console.log(newArr);

//result [12,7,16]