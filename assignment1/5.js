// Return position of first number ‘2‘ within the given array
let x = 0;
let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
for (let i = 0; i < arr_1.length; i++) {
  if (arr_1[i] == 2) {
    x = i;
      console.log(x);
  }
}
