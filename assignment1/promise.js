
// randomNumber = () => {
//     return Math.floor(Math.random() * 1000)
// }

// function Calculate (a + b){
// //     new Promise((resolve, reject) => {
// //         if( a && b){
// //             setTimeout(() => {
// //                 resolve(1000)
// //             },randomNumber() )
// //         }else{ 
// //             reject ('Nuk e llogarit numrin')
// //         }
// //     }). then((shuma) => {
// //         reduce (shuma, randomNumber())
// //     }).catch((Error) => {console.log(Error)})
// // }
// // function name(params) {
// // }

// // console.log(calculate)

// // let promise = new Promise(function(resolve, reject){
    
// // });
// // const count = true;

// // let countValue = new Promise(function (resolve, reject) {
// //     if (count) {
// //         resolve("eshte e sakte");
// //     } else {
// //         reject("eshte gabim");
// //     }
// // });

// // console.log(countValue);
// function restockSuccess() {
//     return (Math.random()> .2);
// }


// const checkAvailability = (itemName, distributorName) => {
//     console.log(`Checking availability of ${itemName} at ${distributorName}...`);
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             if (restockSuccess()) {
//                 console.log(`${itemName} are in stock at ${distributorName}`)
//              resolve(itemName);
//             }else {
//                 reject(`Error: ${itemName} is unvailable from ${distributorName} at this time.`);
//             }
//         }, 1000);
//     })
// };

// const checkSunglasses = checkAvailability('sunglasses','Favourite Supply Co.');
// const checkPants = checkAvailability('pants','Favourite Supply Co');
// const checkBags = checkAvailability('bags','Favourite Supply Co.');

// const onFulfill = (itemArray) => {
//     console.log(`items checked; ${itemArray}`);
//     console.log('Every item was available from the distibutor, Placing order now.');
// };

// const onReject = (rejectionReason) => {
//     console.log(rejectionReason);
// };

// Promise.all([checkSunglasses, checkPants, checkBags])
//     .then(onFulfill)
//     .catch(onReject);


// async

// const helperPromise = function () {
//     const promise = new Promise(function (resolve,reject) {
//         setTimeout(()=>{
//             const x = "geeksforgeeks";
//             const y = "geeksforgeeks";
//         if (x === y) {
//             resolve("String are same")
//         } else {
//             reject("Strings are not same")
//         }
//     },1000);
// })
//     return promise;
// };
// async function demoPromise() {
//     await helperPromise();
//     console.log('test');
// }
// demoPromise();

