// Create a function that will accept 2 parameters,
// those 2 parameters should not be empty and should be numbers
// otherwise we need to tell user that given values are wrong or empty.
// if given numbers are correct return the string that tells result of given numbers
function sum(a, b) {
  if (typeof a != 'number' || typeof b != 'number') {
    return "values are wrong or empty";
  } 
    return a + b;
  
}
const promt = require("prompt-sync")();
let a = promt("give the value of a: ");
const prommt = require("prompt-sync")();
let b = promt("give the value of b: ");
console.log(sum(a, b));
