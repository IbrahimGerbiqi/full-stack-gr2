

randomNumber = () =>{
    return Math.floor(Math.random() * 3000)
}

function calculate(num1,num2) {
    return new Promise((resolve, reject) => {
        if (num1 && num2) {
            resolve(num1 + num2)
        }else{
            reject('Missing numbers!')
        }
    }).then((sum)=>{
       const multiplyResult =  multiply(sum,5);
        console.log(multiplyResult)
        return;
    }
        
    ).catch((err)=>{
        console.log(err)
        return;
    })
}

randomNumber1 = randomNumber();
randomNumber2 = randomNumber();
calculate(randomNumber1,randomNumber2)

function multiply(num1,num2){
    return num1*num2;
}

console.log(randomNumber1,randomNumber2);