const inventory = {
    soap: 1,
    water:true
}





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

handleSuccess = (result) =>{
    console.log('result', result)
}

handleError = (error) =>{
    reStock(error)
}

function reStock(param){
    if(param === 0){
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