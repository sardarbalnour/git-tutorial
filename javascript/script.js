// S24
// HTTP Requests
// what is API
// what is AJAX
// what is JSON
// REST API
// XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.onload = () => {
  const { response } = xhr;
  console.log(JSON.parse(response));
};
xhr.send();
