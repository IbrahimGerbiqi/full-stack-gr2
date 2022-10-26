// // let arr = [5, 5];  

// // let largest = arr[0];

// // let sum = 0

// // for(var number of arr){
// //     sum+=number
// // }

// // averagenum = sum/arr.length;

// // console.log(averagenum);

// // const promt = require("prompt-sync")();
// // let a = promt("enter a name");
// // console.log("your name is ", a );



// // let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
// // let week_days = [];
// // let weekend_days = [];
// // days.forEach(day=>{
// //     if(day=='Saturday' || day=='Sunday'){
// //         weekend_days.push(day);
// //     }else{
// //         week_days.push(day);
// //     }
// // })

// // console.log('Week days are: ',week_days)
// // console.log('Weekend days are: ',weekend_days); 

// // let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
// const prompt = require("prompt-sync")();
// let a = prompt("enter a day: ").toLowerCase();
//     if(a=='saturday' || a=='sunday'){
//         console.log('Dite vikendi');
//     }else{
//         console.log('Dite pune');
//     }

let lista_1 = [1,3,4,5,6,7,8,9,11,530,540];

let lista_2 = [2,3,5,99,9,15,530];
// te gjinden elementet e njejta brenda dy listave
let lista_e_te_njejtave = [];
lista_1.forEach(elementi_lista_1=>{
    lista_2.forEach(elementi_lista_2=>{
        if(elementi_lista_1==elementi_lista_2){
            lista_e_te_njejtave.push(elementi_lista_1);
            
        }
    })
})
console.log(lista_e_te_njejtave);