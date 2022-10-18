// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.
// must use for loop



let arr_1 = [4, 6, 7];
let arr_2 = [8, 1, 9];

let arr_result = []
for (i in arr_1) {
    arr_result.push(arr_1[i] + arr_2[i])
}

console.log(arr_result);

//result [12,7,16]