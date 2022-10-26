const cake = {
    kayo: 0
}

// 0 = kayo : sick
// 1 = kayo : healthy

function start(){
    console.log('on start', cake)
    return new Promise((resolve, reject)=>{
        if(cake.kayo === 1){
            resolve('I have n cakes And I am happy')
        }else{
            if(cake.kayo === 0 || cake.kayo !==1){
                reject(0)
            }
        }
    }).then(success).catch(error)
}

function end(){
    console.log('We still have a party')
}

success = (result) =>{
    console.log('result', result)
    end()
}

error = (error) =>{
    reStock(error)
}

function reStock(param){
    if(param === 0){
        console.log('Kayo eshte semure, duhet te sherohet')
        cake.kayo++
    }else if(param === 1){
        console.log('Kayo eshte sheruar')
    }
    start()
}

start()