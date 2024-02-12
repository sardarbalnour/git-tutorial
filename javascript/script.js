// Javascript is a single-threaded language
// promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("1");
    resolve();
  }, 1000);
});

promise.then(() => console.log("2"));
