// const uc = require ("upper-case")

// let studenti = "erdet";                    //step 1

// console.log(uc.upperCase(studenti));

// const getName = () => {
//     return 'Erdet';
// };
// exports.getName = getName;
// const pcType = () => {
//     return 'kosove';
// };
// exports.pcType = pcType;

function number (a,b) {
    if(a > b){
        return "Numri i pare eshte me i madh se i dyti"
    }else{
        return "Numri i dyte"
    }
}

module.exports = { number };