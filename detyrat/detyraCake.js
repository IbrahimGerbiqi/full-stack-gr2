let sumCakes = 0;



const Birthday = (KayoSick) => {
    return new Promise((resolve, reject) => {
        if (!KayoSick) {
          resolve(sumCakes++);
        }
    });
  };
for(i=0;i<14;i++){
    let sickNotSick = Math.random() < 0.5;
    Birthday(sickNotSick);
}
sick = 14-sumCakes;
console.log('Cakes made:'+sumCakes, 'sick: '+sick );

















