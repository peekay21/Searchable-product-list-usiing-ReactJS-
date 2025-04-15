const myPromise = new Promise((resolve, reject) => {
  // Do something async, like setTimeout
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve("✅ It worked!");
    } else {
      reject("❌ Something went wrong.");
    }
  }, 1000);
});

myPromise
  .then(result => {
    console.log(result); // If resolved
  })
  .catch(error => {
    console.error(error); // If rejected
  });
