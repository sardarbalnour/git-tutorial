// Javascript is a single-threaded language
// promise
const random = new Promise((resolve, reject) => {
  console.log("start");
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber);
    } else {
      reject("An error occured");
    }
  }, 1000);
});

random
  .then((result) => result * 10)
  .then((number) => Math.floor(number))
  .then((num) => console.log(num))
  .catch((error) => console.log(error));
// random.catch((error) => console.log(error));
