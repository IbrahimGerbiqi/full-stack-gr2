// Create a function that will accept 2 parameters,
// those 2 parameters should not be empty and should be numbers
// otherwise we need to tell user that given values are wrong or empty.
// if given numbers are correct return the string that tells result (SUM) of given numbers

function shuma(param1,param2){
    if(typeof param1 !='number'||typeof param2!='number'){
        return 'Parametri 1 dhe Parametri 2 duhet te jene numra dhe nuk ben te jene te thate.';
    }
    return param1+param2;
}
shuma_e_dy_numrave = shuma('',0);
console.log(shuma_e_dy_numrave);