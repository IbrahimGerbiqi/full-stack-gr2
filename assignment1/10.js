// Create a function that will accept 2 parameters,
// those 2 parameters should not be empty and should be numbers
// otherwise we need to tell user that given values are wrong or empty.
// if given numbers are correct return the string that tells result of given numbers

function sum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return `The sum of ${a} and ${b} is ${(a + b)}.`
    } else {
        return 'Given value is wrong / empty.'
    }
}

console.log(sum(3,6))
console.log(sum(6,'rfd'))