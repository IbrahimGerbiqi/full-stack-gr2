const inventory = {
    soap: 0,
    water:false
}

//nuk eshte shfrytezuar ne kod
function randomDelay(){
    return Math.floor(Math.random()*3000)
}

function randomAct(){
    let act = false
    let number = Math.random().toFixed(2)
    console.log(number)
    if(number > 0.51) act = true
    inventory.water = act
}

randomAct()

// 0 = ska uj ska soap
// 1 = ska uj
// 2 = ska soap
  
function start(){
    console.log('on start',inventory)
    return new Promise((resolve,reject)=>{
        if(inventory.soap > 0 && inventory.water === true){
            resolve('Washing Machine started working')
        }else{
            if(inventory.soap === 0 && inventory.water === false){
                reject(0)
            }else if(inventory.soap > 0 && inventory.water === false){
                reject(1)
            }else{
                reject(2)
            }
        }
    }).then(handleSuccess).catch(handleError)
}

function end(){
    console.log('Dishes are ready to take off!')
    return
}

handleSuccess = (result) =>{
    console.log('result', result)
    end()
}

handleError = (error) =>{
    reStock(error)
}

function reStock(param){
    if(param === 0){
        console.log('Duhet te kemi uje dhe shampon')
        inventory.soap++
        inventory.water = true
    }else if(param === 1){
        inventory.water = true
    }else{
        inventory.soap++
    }

    start()
}

start()