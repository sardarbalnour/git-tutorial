// S24
// HTTP Requests
// what is API
// what is AJAX
// what is JSON
// REST API
// XMLHttpRequest

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhr.onload = () => {
//   const { response } = xhr;
//   console.log(JSON.parse(response));
// };
// xhr.send();

// async function getData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   console.log(data);
// }
// getData();

// function fetchData(url) {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.onload = () => {
//       const { response } = xhr;
//       resolve(JSON.parse(response));
//     };
//     xhr.send();
//   });
//   return promise;
// }
// fetchData("https://jsonplaceholder.typicode.com/posts").then((data) =>
//   console.log(data)
// );

// fetch
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
const url = "https://jsonplaceholder.typicode.com/posts";
const data = {
  title: "hrchi pm xosha",
  body: "disanish hrchi dlt dyle",
  userId: "2000",
};

fetch(url, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data));
