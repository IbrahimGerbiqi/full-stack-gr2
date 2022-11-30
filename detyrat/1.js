// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
<<<<<<< HEAD
    let faktoriel=1;
    for(let i=1; i<= num; i++){
        
        faktoriel=faktoriel*i; 
    }
    return faktoriel
}

console.log(factorialize(5));
=======
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}

console.log(factorialize(0));
>>>>>>> d909caa1376ee899fd840ff8e3358c8ec2e08cff
