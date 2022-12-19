const inventory={
  soap:0,
  water:true
}


function start(){
  console.log(inventory)
  return new Promise((resolve,reject)=>{
      if(inventory.soap >= 1 && inventory.water === true){
          resolve('Washing machine started working.')
      }else{
          reject('Without a soap or water machine wont start!')
      }
   }).then(handelSuccess).catch(handelError)
}

handelSuccess = (message) =>{
  console.log(message)
  return
}

handelError = (err) =>{
  console.log('qetu',)
  return
}

randomNumber = () =>{
  return Math.floor(Math.random() * 3000)
}

function calculate(a,b){
new Promise((resolve,reject)=>{
  if(typeof a === 'number' && typeof b === 'number'){
      const shuma = a+b
      setTimeout(() => {
          resolve(shuma) // 1 + 2 = 3
      }, randomNumber());
  }else{
      reject('Cant calculate given numbers!')
  }
}).then((shuma)=>{
        // 3
  reduce(shuma,randomNumber())
}).catch((err)=>{console.log(err)})
}


function reduce(num1,num2){
  console.log(num1 - num2)
  return num1 - num2
}

calculate(randomNumber(),randomNumber())