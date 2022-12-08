function kalkulo(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1 && num2){
            resolve(num1+num2)
        }else{
            reject('NUk jane definuar numrat')
        }
    }).then((shuma)=>{
        return shuma*10;
    }).catch((errori)=>{
        console.log(errori)
    })
}