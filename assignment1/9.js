// Get the sum of all elements within array and the sum of two array.

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];

let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

total_arr_1 = 0;
total_arr_2 = 0;
sum_total = 0;

// working solution
// for(let i=0;i<arr_1.length;i++){
//     total_arr_1 = total_arr_1+arr_1[i];
// }
// for(let i=0;i<arr_2.length;i++){
//     total_arr_2 = total_arr_2+arr_2[i];
// }

// better solution
// arr_1.forEach(number=>{
//     total_arr_1+=number;
// })
// arr_2.forEach(number=>{
//     total_arr_2+=number;
// })
// another better solution
// for(let i of arr_1){
//     total_arr_1 +=i;
// }
// for(let i of arr_2){
//     total_arr_2 +=i;
// }
// best solution
function sum_of_array(array){
    sum = 0;
    array.forEach(number=>{
        sum+=number;
    })
    return sum;
}
total_arr_1 = sum_of_array(arr_1);
total_arr_2 = sum_of_array(arr_2);


sum_total = total_arr_1+total_arr_2;

console.log('total_arr_1',total_arr_1)
console.log('total_arr_2',total_arr_2)
console.log('sum_total',sum_total);

