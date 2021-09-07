import "./App.css";
import getTodos from "./getTodos";

const todos = getTodos();

// defining the React props variables
const ToDos = (props) => {
  return (
    <ul type="square">
      <li>
        <h3>Task: {props.todoDescription}</h3>
        <p style={{ color: "red" }}>Deadline: {props.deadline}</p>
      </li>
    </ul>
  );
};

// Accessing each todo of the above  todo array
export default function App() {
  return (
    <div className="App">
      <h2 style={{ color: "darkblue" }}> Todo List:</h2>
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
