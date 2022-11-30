function reStockSucces(){
    return (Math.random()> .2);
}

const checkAvailabilty = (itemName, distributorName)=> {
    console.log(`Checking availability of ${itemName} at ${distributorName}`);
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(reStockSucces()){
                console.log(`${itemName} are in stock at ${distributorName}`)
                resolve(itemName);
            } else{
                reject(`error: ${itemName} is unavailable from ${distributorName} at this time.`);
            }
        },1000)
    });
};
const checkSunglasses = checkAvailabilty('Sunglasses','Favorite supply co.');
const checkPants = checkAvailabilty('pants', 'Favortie supply co.');
const checkBags = checkAvailabilty('Bags','Favorite supply co.');

const onFulfill = (itemsArray)=>{
    console.log(`Items checked: ${itemsArray}`);
    console.log(`Every item was available from the distributor. Placing order now.`)
};

const onReject = (rejectionReason) =>{
    console.log(rejectionReason);
};

Promise.all([checkSunglasses, checkPants, checkBags])
.then(onFulfill)
.catch(onReject);

