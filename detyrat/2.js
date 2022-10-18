// Return the length of the longest word in the provided sentence.

// Your response should be a number (length of a largest string).
const prompt = require('prompt-sync')()

function findLongestWordLength() {
    const sentence = prompt('Enter a sentence: ')
    const longest = sentence.split(' ').sort(function (a, b) {
        return b.length - a.length
    })
    return `The longest word is "${longest[0]}", with a length of ${longest[0].length} characters.`
}

console.log(findLongestWordLength())

