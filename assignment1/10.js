// Create a function that will accept 2 parameters,
// those 2 parameters should not be empty and should be numbers
// otherwise we need to tell user that given values are wrong or empty.
// if given numbers are correct return the string that tells result (SUM) of given numbers

let sum=0;

function sumNum(num1,num2){
  if(typeof(num1) == "number" && typeof(num2) == "number" ){
    sum=num1+num2;

    return sum
  }
  
  return "Nuk keni shtyp numer"
}

console.log(sumNum(2,3));