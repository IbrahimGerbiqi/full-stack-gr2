// Get the sum of all elements within array and the sum of two array.

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];

let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
let x1 = 0;
for (let i of arr_1) {
  x1 += i;
}
console.log("The sum of arr_1 is " + x1);
let x2 = 0;
for (let i of arr_2) {
  x2 += i;
}
console.log("The sum of arr_2 is " + x2);
console.log("The sum of arr_1 and arr_2 is " + (x1 + x2));
