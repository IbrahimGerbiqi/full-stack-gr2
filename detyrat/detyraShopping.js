function restockSuccess(){
    return (Math.random() > .2);

}
const checkAvailability = (itemName, distributorName) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            if (restockSuccess()){
                console.log(itemName + ' are in stock at '+ distributorName)
                resolve(itemName);
            } else{
            reject('Error: ' + itemName + ' is unavailable from ' + distributorName + ' at this time')
            }
        },1000);
    });
}

const checkSunGlasses = checkAvailability('sunglasses', 'Rayban');
const checkPants = checkAvailability('pants', 'zara');
const checkBags = checkAvailability('bags', 'Prada');

const onFulFill = (itemsArray)=>{
    console.log('Items checked: ' + itemsArray)
    console.log('Every item was available fromthe distributor. Placing the order now!');
}
const onReject = (rejectReasons)=>{
    console.log(rejectReasons)
}

Promise.all([checkSunGlasses,checkBags,checkPants])
.then(onFulFill)
.catch(onReject)