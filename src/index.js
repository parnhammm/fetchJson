"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var urlToRequest = "http://jsonplaceholder.typicode.com/todos/1";
//axios.get() will return a promise, so lets use the then to print out the response
axios_1["default"].get(urlToRequest).then(function(response) {
  const todo = response.data;

  const ID = todo.ID,
    title = todo.Title,
    finished = todo.Finished;

  console.log(`
        The Todo with ID: ${ID} 
        Has a title of ${title}
        Is it finished? ${finished}
    `);
});
