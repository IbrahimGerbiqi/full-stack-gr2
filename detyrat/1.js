// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.
const prompt = require('prompt-sync')()

function factorialize() {
    const number = parseInt(prompt('Enter a positive number: '))
    let factorial = 1
    if (number < 0) {
        return `Error! ${number} is a negative number!`
    } else if (number === 0) {
        return `The factorial of ${number} is 1.`
    } else {
        for (let i = 1; i <= number; i++) {
            factorial *= i
        }
    }
    return `The factorial of ${number} is ${factorial}.`
}

console.log(factorialize())

