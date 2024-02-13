// Javascript is a single-threaded language
// promise
const random = new Promise((resolve, reject) => {
  console.log("start");
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      console.log("success :", randomNumber);
      resolve();
    } else {
      console.log("reject :", randomNumber);
      reject();
    }
  }, 1000);
});

random.then(() => {console.log("success end.")});
random.catch(() => {console.log("reject end.")});
