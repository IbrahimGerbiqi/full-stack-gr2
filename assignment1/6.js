// Create an array that will include 100 numbers.
// 50 elements will be added from the end of array
// 50 elements will be added from beginning of the array

// example arr = [10,9,8,7,6,1,2,3,4,5]

<<<<<<< HEAD
let array = []
let max = 100

for (let i = 1; i <= max; i++) {
    if (i <= 50) {
        array.push(i)
    } else {
        array.unshift(i)
    }
}

console.log(array)
=======

let arr = []


for (let i = 1; i <= 100; i++) {
    if(i <= 50){
        arr.push(i)
    }else{
        arr.unshift(i)
    }
}

console.log(arr);
>>>>>>> 59c66b2518037919e7a6f9e113af30a8374ec844
