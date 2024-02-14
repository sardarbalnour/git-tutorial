// Javascript is a single-threaded language
// promise
// s23
const dublicate = (number) => {
  const promise = new Promise((resolve, reject) => {
    console.log("start");
    setTimeout(() => {
      const result = number * 10;
      resolve(result);
    }, 1000);
  });
  return promise;
};

const add = (number) => {
  console.log("start add");
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = number + 5;
      resolve(result);
    }, 1000);
  });
  return promise;
};

// dublicate(5)
//   .then((number) => add(number))
//   .then((result) => console.log(result));

async function start() {
  const number = await dublicate(5);
  const result = await add(number);
  console.log(result);
  console.log("end");
}

start();
