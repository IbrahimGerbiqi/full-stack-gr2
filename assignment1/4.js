// Calculate the average number in given array.

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];

<<<<<<< HEAD
let sum=0;

for(let num of arr_1){
    sum += num;
}
let mesatarja = sum/arr_1.length;
console.log(mesatarja);
=======
// let sum = 0

// for(let num of arr_1){
//     sum += num
// }


let sum = '29.09090909090'

function decimal(value,item) {
    let result = ''
        for (let i = 0; i < value; i++) {
            result += item[i]
        }
    return result
}

let decimalValue = decimal(5,sum.split('.')[1])

let finalValiue = `${sum.split('.')[0]}.${decimalValue}`

console.log(finalValiue)
>>>>>>> d909caa1376ee899fd840ff8e3358c8ec2e08cff
