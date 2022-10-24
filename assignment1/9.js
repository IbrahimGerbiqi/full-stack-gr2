// Get the sum of all elements within array and the sum of two array.

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];

let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

arr1sum = 0;
arr2sum = 0;

arr_1.forEach(i => {
    arr1sum += i;
});

arr_2.forEach(i => {
    arr2sum += i;
});

/*function mbledh(arr1, arr2) {
    let result = 0;
    if (arr1.length >= arr2.length) {
        for (let i in arr1) {
            result += arr1[i] + arr2[i]
        }
    } else {
        for (let i in arr2) {
            result += arr1[i] + arr2[i]
        }
    }

    return result;
}
*/
komplet = arr1sum + arr2sum;

console.log(arr1sum);
console.log(arr2sum);
console.log(komplet);