// Create a function that will accept 2 parameters,
// those 2 parameters should not be empty and should be numbers
// otherwise we need to tell user that given values are wrong or empty.
<<<<<<< HEAD
// if given numbers are correct return the string that tells result of given numbers

// function sum(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return `The sum of ${a} and ${b} is ${(a + b)}.`
//     }
//     return 'Given value is wrong / empty.'
//}


function sum(a, b) {
    if (!a || !b || typeof a !== 'number' || typeof b !== 'number') {
        return `Given value is wrong / empty`
    }
    return `The sum of ${a} and ${b} is ${(a + b)}.`
}

console.log(sum(3, 6))
console.log(sum(6, 'asd'))

=======
// if given numbers are correct return the string that tells result (SUM) of given numbers

function shuma(param1,param2){
    if(typeof param1 !='number'||typeof param2!='number'){
        return 'Parametri 1 dhe Parametri 2 duhet te jene numra dhe nuk ben te jene te thate.';
    }
    return param1+param2;
}
shuma_e_dy_numrave = shuma('',0);
console.log(shuma_e_dy_numrave);
>>>>>>> 59c66b2518037919e7a6f9e113af30a8374ec844
