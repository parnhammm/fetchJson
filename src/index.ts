import axios from "axios";

const urlToRequest = "http://jsonplaceholder.typicode.com/todos/1";

//axios.get() will return a promise, so lets use the then to print out the response
axios.get(urlToRequest).then(response => {
  console.log(response.data);
});
