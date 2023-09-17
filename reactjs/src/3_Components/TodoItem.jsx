import React from "react";

const TodoItem=()=>{
    return(
        <div>
            <li className="todo-item">
                <span>
                    <input type="checkbox" />
                    <span className="todo-item-text">Namaz</span>
                </span>
            </li>
            <p>...</p>
        </div>
    );
};

export default TodoItem;