function randomAct(){
    let act = false

    let number = Math.random().toFixed(2)
    if(number > 0.51) act = true 
    return act
}

function test(){
    console.log('test')
}

module.exports = {randomAct ,test}
