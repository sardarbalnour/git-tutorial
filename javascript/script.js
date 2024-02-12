// Javascript is a single-threaded language
// callback functions in async js

function duplicate(number, callback) {
  setTimeout(() => {
    const result = number * 2;
    callback(result);
  }, 2000);
}

const add = (number) => {
  console.log(number + 5);
};

duplicate(10, add);
