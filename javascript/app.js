// Third-Party libraries

// axios
//   .get("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => console.log(response));

// axios
//   .get("/https://jsonplaceholder.typicode.com/todos")
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

const getReq = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  console.log(response);
};
getReq();
