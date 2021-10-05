import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function TodoList({ completeTodo, deleteTodo, editTodo, todoArr }) {
  return (
    <div>
      <ul>
        {todoArr && todoArr.length > 0 ? (
          todoArr.map((el, i) => (
            <TodoItem
              key={el.id}
              todo={el}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))
        ) : (
          <h1>To do list is empty : No items 🤷‍♂️ </h1>
        )}
      </ul>
    </div>
  );
}
TodoList.propTypes = {
  completeTodo: PropTypes.bool.isRequired,
  deleteTodo: PropTypes.array.isRequired,
  editTodo: PropTypes.string.isRequired,
  todoArr: PropTypes.array,
};
export default TodoList;
