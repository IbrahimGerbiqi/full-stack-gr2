const { randomAct } = require('./randomAct')

function randomDelay(){
    return Math.floor(Math.random() * 3000)
}   



function testPromise(){
    return new Promise((resolve,reject)=>{
        if(randomAct()){
            resolve('true')
        }else{
            reject('false')
        }
    })
}

module.exports = { randomDelay, testPromise }
