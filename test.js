const uc = require('upper-case')
const isUc = require('is-upper-case')

const utils = require('./utils/randomDelay')


// const text = 'save'

// console.log(utils.randomDelay(1))
// console.log(text.toUpperCase())

utils.testPromise().then((message)=>{
    console.log('message',message);
}).catch((err)=>{
    console.log('err',err);
})
