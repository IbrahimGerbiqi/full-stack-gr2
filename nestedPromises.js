//funksioni random percakton proporcionalitetin e disponueshmerise se produkteve perkatese
function restockSuccess(){
    return(Math.random() > .2); //0.2 ose 80% jane shansat per me pas produkte (sunglasses, pants, bags) ne stok
}

//definojme funksionin si promise
const checkAvailability = (itemName, distributorName) => {
    console.log(`Cheking availability of ${itemName} at ${distributorName}...`);
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(restockSuccess()){
                console.log(`${itemName} are in stock at ${distributorName}`);
                resolve(itemName);
            }else{
                reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
            }
        }, 1000);
    });
};

//e inicojme promise 3x sipas rasteve
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

// i definojme mesazhet e permbushjes (fullfill) dhe refuzimit (reject)
function onFulfill(itemsArray) {
    console.log(`items checked: ${itemsArray}`);
    console.log(`Every item was available from the distributor. Placing order now.`);
}

const onReject = (rejectionReason) => {
    console.log(rejectionReason);
};

Promise.all([checkSunglasses, checkPants, checkBags])
.then(onFulfill)
.catch(onReject);