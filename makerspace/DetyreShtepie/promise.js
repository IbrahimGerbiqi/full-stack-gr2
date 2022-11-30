
const kayo = {
    sick : true,
    healthy : false
}

function cook(){
    console.log('on cook',kayo)
    return new Promise((resolve,reject)=>{
         if(kayo.sick > 0 && kayo.healthy === true){
            resolve('kayo is healthy to make a cake')
         }else{
            reject(0)
         }
    }).then(handleSucces).catch(handleError)
}
handleError = (error)=>{
        console.log('cake doesnt made because kayo is sick');
}
handleSucces =(result)=>{
    console.log('cake is made and kayo is not sick',result);
}
setTimeout=(()=>{

},2000); //2weeks


cook() 


