kayo = {
  health: false,
};

function cook() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (kayo.health === false) reject(0);
      else {
        resolve("");
      }
    }, 2000); // 2 weeks
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
