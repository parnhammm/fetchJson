import axios from "axios";

const urlToRequest = "http://jsonplaceholder.typicode.com/todos/1";

//Interfaces in typescript are used to define the structure of an object
//Here we are defining what the resulting call to this API will produce
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

//axios.get() will return a promise, so lets use the then to print out the response
axios.get(urlToRequest).then(response => {
  const todo = response.data as Todo;

  logTodo(todo.id, todo.title, todo.completed);
});

const logTodo = (id, title, completed) => {
  console.log(`
    The Todo with an ID: ${id}
    Has the title: ${title}
    Is completed? ${completed}
  `);
};
