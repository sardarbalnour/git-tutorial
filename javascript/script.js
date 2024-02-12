// Javascript is a single-threaded language
// callback functions in async js
// callback hell

function duplicate(number, callback1, callback2) {
  setTimeout(() => {
    const result = number * 2;
    console.log("1", result);
    callback1(result, callback2);
  }, 2000);
}

const add = (number, callback) => {
  const result = number + 5;
  console.log("2", result);
  callback(result);
};

const toMyString = (number) => {
  console.log("3", `${number}`);
};

duplicate(10, add, toMyString);
