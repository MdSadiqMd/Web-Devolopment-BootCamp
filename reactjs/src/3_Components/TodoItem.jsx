import React from "react";

const TodoItem = (props) => {
  return (
    <div>
      <ul className="todo-item">
        <span>
          {props.completed ? ( <></> ) : ( // If props completed return the empty jsx and if not return the written jsx
            <>
              <input type="checkbox" />
              <span className="todo-item-text">{props.text}</span>
            </>
          )}
        </span>
      </ul>
      <p>...</p>
    </div>
  );
};

export default TodoItem;
