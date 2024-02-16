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

// fetch
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
}
getData();
