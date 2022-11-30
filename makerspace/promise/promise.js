
function timeout(){
    return Math.floor(Math.random() * 9000);
}
function calcu(a,b){
    new Promise((resolve,reject) =>{
        if(a && b){
            const shuma = a+b
            setTimeout(()=>{
                resolve(shuma)
            })
        }else{
            reject('nuk behet shumzimi!');
        }
    }).then(shuma=>{
        console.log(zbritje(shuma,timeout()));
        return
    }).catch(err=> {
        console.log(err);
        return
    })
}
function zbritje(numri1,numri2){
    return (numri1 - numri2)
}
calcu(1,2)


























