// Calculate the average number in given array.

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let x = 0;
for (let i of arr_1) {
  x += i;
}
console.log(x / arr_1.length);
