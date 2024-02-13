// Javascript is a single-threaded language
// promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("1");
    // resolve();
    reject()
  }, 1000);
});

// promise.then(() => console.log("2"));
promise.catch(() => console.log("2"));
