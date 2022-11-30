const up = require("upper-case");
const isup = require("./utils/checkifuppercase")

// const delay = require('./utils/randomDelays');

// console.log(delay.randomDelay());

tekst = "test"

tekst = up.upperCase(tekst);

console.log(tekst);

console.log(isup.isUpperCase(tekst))