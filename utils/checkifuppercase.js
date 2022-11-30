const up = require("upper-case")

function isUpperCase(tekst) {
    if (up.upperCase(tekst) === tekst) {
        return true;
    } else {
        return false;
    }
}

module.exports = { isUpperCase };