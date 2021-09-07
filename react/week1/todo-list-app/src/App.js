import "./App.css";
import getTodos from "./getTodos";

const todos = getTodos();

// defining the React props variables
const ToDos = (props) => {
  return (
    <ul>
      <li>
        {props.todoDescription}, {props.deadline}
      </li>
    </ul>
  );
};

// Accessing each todo of the above  todo array
export default function App() {
  return (
    <div className="App">
      <h2>Todo List:</h2>
      <h4 id="header">Todo's and the deadlines :- </h4>
      <ul id="todoList">
        {todos.map((todo) => {
          return (
            <ToDos
              todoDescription={todo.todoDescription}
              deadline={todo.deadline}
            />
          );
        })}
      </ul>
    </div>
  );
}

// export default App;
