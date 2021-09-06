import "./App.css";
// Array of todo's
const todoArray = [
  {
    todoDescription: "Get out of bed",
    deadline: "Wed Sep 13 2021",
  },
  {
    todoDescription: "Brush teeth",
    deadline: "Thu Sep 14 2021",
  },
  {
    todoDescription: "Eat breakfast",
    deadline: "Fri Sep 15 2021",
  },
];

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
    <div class="App">
      <h2>Todo List:</h2>
      <h4 id="header">Todo's and the deadlines :- </h4>
      <ul id="todoList">
        {todoArray.map((todo) => {
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
