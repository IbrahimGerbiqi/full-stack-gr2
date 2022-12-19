// Get the sum of all elements within array and the sum of two array.

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];

let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
<<<<<<< HEAD
let combArr = sum(arr_1) + sum(arr_2)

function sum(array) {
    let sumArr = 0
    array.forEach(num => {
        sumArr += num
    })
    return sumArr
}

// let sum1 = '29.09090909090'
//
// function decimal(value,item) {
//     let result = ''
//     for (let i = 0; i < value; i++) {
//         result += item[i]
//     }
//     return result
// }
//
// let decimalValue = decimal(5,sum1.split('.')[1])
//
// let finalValue = `${sum1.split('.')[0]}.${decimalValue}`
//
// console.log(finalValue)

console.log(`The combined sum of both arrays is ${combArr}.`)
=======

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
>>>>>>> 59c66b2518037919e7a6f9e113af30a8374ec844

