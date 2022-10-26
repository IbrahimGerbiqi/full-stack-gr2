// Create a function that will accept 2 parameters,
// those 2 parameters should not be empty and should be numbers
// otherwise we need to tell user that given values are wrong or empty.
// if given numbers are correct return the string that tells result of given numbers

// zgjidhja versioni 1
function shuma(a,b){
    if ( typeof(a) == 'number' && typeof(b) == 'number'){
        return a + b
        //console.log(a+b);
    }
    else{
        return "the given values arent numbers"
    }
}
  console.log(shuma(6, 9));

