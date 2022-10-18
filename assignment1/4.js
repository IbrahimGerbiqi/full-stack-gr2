// Calculate the average number in given array.

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];

let sum = 0;

for ( let i in arr_1 )
{
    sum += arr_1[i];
}
console.log(sum/arr_1.length);