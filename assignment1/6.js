// Create an array that will include 100 numbers.
// 50 elements will be added from the end of array
// 50 elements will be added from beginning of the array

// example arr = [10,9,8,7,6,1,2,3,4,5]

let lista = []
testdgjsg = 100



for (i = 0; i <= testdgjsg; i++) {
    if (i >= testdgjsg / 2) {
        lista.unshift(i);
    } else {
        lista.push(i);
    }
}


console.log(lista);