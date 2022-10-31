const helperPromise = function () {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const x = "geeksforgeeks";
      const y = "geeksforgeeks";
      if (x === y) {
        resolve("strings are same");
      } else {
        reject("strings are not same");
      }
    }, 10000);
  });
  return promise;
};

async function demoPromise() {
  await helperPromise();
  console.log("test");
}
demoPromise();
