const cake = {
    kayo: 0
}

// 0 = kayo : sick
// 1 = kayo : healthy

function start(){
    console.log('on start', cake)
    return new Promise((resolve, reject)=>{
        if(cake.kayo > 0){
            resolve('Kayo is healthy: I have n cakes And I am happy')
        }else if(cake.kayo === 0){
                reject(0)
            }
        }
    ).then(success).catch(error)
}

function end(){
    console.log('We still have a party')
}

success = (result) =>{
    console.log(result)
    end()
}

error = (error) =>{
    reStock(error)
}

function reStock(param){
    if(param === 0){
        console.log('Kayo is sick: There is no cake and I am sad')
        cake.kayo++
    }else if(param === 1){
        console.log('Kayo is healthy')
    }
    start()
}

start()