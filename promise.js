// const inventory = {
//     soap: 2,
//     water: true
// }

// function start() {
//     new Promise((resolve, reject) => {
//         if (inventory.soap > 1 && inventory.water == true) {
//             resolve('Washing machine started working')
//         } else {
//             reject("Without soap or water machine wont start")
//         }
//     }).then(handelSucces).catch(handelSucces)
// }


/*

console.log(randomDelay());
// function calculate(num1, num2) {
//     setTimeout(() => {
//         return num1 + num2
//     }, randomDelay())
// }

function reduce(num1, num2) {
    return (num1 - num2)
}

function calculate(num1, num2) {
    new Promise((resolve, reject) => {
        if (num1 && num2) {
            const shuma = (num1 + num2)
            setTimeout(() => {
                resolve(shuma)
                console.log(shuma);
            }, randomDelay());
        } else {
            reject('Cant calculate numbers')
        }
    }).then((shuma) => {
        shuma2 = reduce(shuma, 5)
        console.log(shuma2);
        return shuma2;

    }).catch((err) => console.log(err))

}

calculate(1, 2)*/

// console.log(reduce(calculate(1, 2), 5));

// console.log(calculate(1, 2));
/*
handelSucces = (message) => {
    console.log(message)
    return
}
handelError = (error) => {
    console.log(error);
    return
}*/

randomDelay = () => {
    return Math.floor(Math.random() * 3000)
}

function shumezim(num1, num2) {
    return num1 * num2
}

function calculate(num1, num2) {
    new Promise((resolve, reject) => {
        if (num1 && num2) {
            setTimeout(() => {
                resolve(num1 + num2)
            }, randomDelay());
        } else {
            reject('Cant calculate numbers')
        }
    }).then((shuma) => {
        prodhimi = shumezim(shuma, 5)
        console.log(prodhimi)
    }).catch((err) => console.log(err))

}


calculate(1, 2)

//start()