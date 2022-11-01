const helperPromise = function () {
    const promise = new Promise((resolve, reject) => {
        let x = "asd";
        let y = "asd";
        setTimeout(() => {
            if (x === y) {
                resolve('String are same')
            } else {
                reject("ssad")
            }
        }, 3000)
    })
    return promise // 'String are same'
}

async function demoPromise() {
   try {
    const result = await helperPromise(); // 'String are same'
    console.log(result)
   } catch (error) {
    console.log(error)
   }
}

demoPromise()