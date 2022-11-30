const helperPromise = function (){
    const promise = new Promise(function (resolve,reject) {
        setTimeout(() => {
            const x = "geeksforgeeks";
            const y = "geeksforgeeks";
            if (x === y) {
                resolve("Strings are same");
            } else {
                reject("Strings are not same");
            }
        }, 1000);
    })

return promise;
}
async function demoPromise(){
    await helperPromise();
    console.log('test');
}
demoPromise();






