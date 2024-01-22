// client-side storage season 20
// local storage
localStorage.setItem("name", "sardar");
// JSON.stringify , JSON.parse
const data = { name: "sardar", age: 23 };
const srtingData = JSON.stringify(data);
localStorage.setItem("data", srtingData);

