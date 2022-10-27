function restockSuccess() {
  return Math.random() > 0.2;
}
// Definojme funksionin si promise:
const checkAvailability = (itemName, distributorName) => {
  console.log(`Checking availability of ${itemName} at ${distributorName}...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (restockSuccess()) {
        console.log(`${itemName} are in stock at ${distributorName}`);
        resolve(itemName);
      } else {
        reject(
          `Error ${itemName} is unavailable from ${distributorName} at this time.`
        );
      }
    }, 1000);
  });
};

// e inicojme promise 3 here sipas rasteve:
const checkSunglasses = checkAvailability("sunglasses", "Favorite Supply Co.");
const checkPants = checkAvailability("pants", "Favorite Supply Co.");
const checkBags = checkAvailability("bags", "Favorite Supply Co.");

// i definojme mesazhet e permbushjes (fulfill) dhe refuzimit (Reject)
const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(
    `Every item was available from the distributor. placing order now`
  );
};

const onReject = (rejectionReason) => {
  console.log(rejectionReason);
};

// e therrasim funksionin Promise.all() per te kontrolluar ne te njejten kohe te gjitha programet

Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject);
