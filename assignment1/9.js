// Get the sum of all elements within array and the sum of two array.

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];

let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
let combArr = sum(arr_1) + sum(arr_2)

function sum(array) {
    let sumArr = 0
    array.forEach(num => {
        sumArr += num
    })
    return sumArr
}

console.log(`The combined sum of both arrays is ${combArr}.`)