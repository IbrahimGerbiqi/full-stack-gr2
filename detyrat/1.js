// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.


// function factorialize(num) {
    
//     let konstanta = 1;

//     for(let i=1; i<=num; i++){
//         console.log(i,konstanta)
//         konstanta = i * konstanta;
//     }
//     return num;
// }

// console.log(factorialize(5));

function faktorialize(num){
    konstanta = 1;

    for(let i=1; i<=num; i++){
        konstanta = konstanta * i;
    }
    return konstanta;
}
//faktorialize(5);
console.log(faktorialize(5));