kayo = {
  sick: 0,
  healthy: 1,
};

function cook() {
  return new Promise((resolve, reject) => {
    if (kayo.sick === 0 && kayo.healthy === 1) reject(0);
    else if (kayo.sick === 1 && kayo.healthy === 0) {
      resolve("Kayo is not sick and cake is ready");
    }
  })
    .then(handleSuccess)
    .catch(handleError);
}
handleSuccess = (result) => {
  console.log(
    "Cake is ready and Kayo is not sick, Get ready for party",
    result
  );
};

handleError = (error) => {
  console.log(
    "Cake is not ready because Kayo is sick, But we still have a party"
  );
};

cook();
