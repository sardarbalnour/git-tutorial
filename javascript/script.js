// regex : regular expression
// is a way to describe a pattern
// it is used to locate or validate specific strings or
// patterns of text in a sentence, document, or any other
// character input
// learning regex

// const email = "balnour.sardar@gmail.com";
// const regex = /^[\w_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/g;
// const result = regex.test(email);
// console.log(result);

const str = "Hi; I am Sardar and my phone number is 09055125636";
const regex = /09\d{9}/;
const newStr = str.replace(regex, "*********");
console.log(newStr);
