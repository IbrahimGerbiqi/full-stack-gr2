// Get the sum of all elements within array and the sum of two array.

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];

let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

//SHUMA E ARR_1
let sum1 = 0;
for ( let i in arr_1 )
{
    sum1 = sum1 + arr_1[i];
}
//console.log(sum1);

//SHUMA E ARR_2
let sum2 = 0;
for ( let i in arr_2 )
{
    sum2 = sum2 + arr_2[i];
}
//console.log(sum2);

//SHUMA TOTALE E DY ARRAYAVE
total = 0;
total = sum1 + sum2;
console.log(total);