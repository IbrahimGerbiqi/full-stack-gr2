//detyra e pare

// const inventory = {
//     soap: 1,
//     water: true
// }

// function start(){
//     return new Promise((resolve, reject)=>{
//         if(inventory.soap>1 && inventory.water == true){
//             resolve('Washing machine started working.')
//         }else{
//             reject('Machine wont start without a soap or water!')
//         }
//     })
// }
// console.log(start());




//shenimet e profit

// const inventory={
//     soap:0,
//     water:true
// }


// function start(){
//     console.log(inventory)
//     return new Promise((resolve,reject)=>{
//         if(inventory.soap > 1 && inventory.water === true){
//             resolve()
//         }else{
//             reject('Without a soap or water machine wont start!')
//         }
//      }).then(handelSuccess).catch(handelError)
// }

// handelSuccess = (message) =>{
//     console.log(message)
//     return
// }

// handelError = (err) =>{
//     console.log('qetu',)
//     return
// }


//ushtrime

// const vlerat = {
//     paga: 500,
//     tvsh: 60
// }

// function llogaritja(a,b){

//     console.log(vlerat)
//     return new Promise((resolve, reject)=>{
//         if(typeof(vlerat.paga) == 'number' && typeof(vlerat.tvsh == 'number')){
//             sum = a+b;
//             resolve(sum)
//         }else{
//             reject('llogaritja nuk mund te kryhet!')
//         }
//     }).then(sukses).catch(error)
// }

// sukses = (msg) => { console.log(msg) return}
// error = (err) => { console.log(err) return}


// var add = function(x, y) {
//     return new Promise((resolve,reject) => {
//       var sum = x + y;
//       if (sum) {
//         resolve(sum);
//       }
//       else {
//         reject(Error("Could not add the two values!"));
//       }
//     });
//   };
//   add(2,2)
//   .then((added) => {
//     // added = 4
//     // return subtract(added, 3);
//   })

// var llogaritja = function(a,b) {
//     new Promise(function(resolve, reject) {
//     // do thing, then…
//     sum = a+b;
    
//     if (sum) {
//       resolve("See, it worked!");
//     }
//     else {
//       reject(Error("It broke"));
//     }
//   })
// };

//example
// const aThenable = {
//   then(onFulfilled, onRejected) {
//     onFulfilled({
//       // The thenable is fulfilled with another thenable
//       then(onFulfilled, onRejected) {
//         onFulfilled(42);
//       },
//     });
//   },
// };

// Promise.resolve(aThenable); // A promise fulfilled with 42