import React from "react";

const TodoItem=()=>{
    return(
        <div>
            <ul className="todo-item">
                <span>
                    <input type="checkbox" />
                    <span className="todo-item-text">Namaz</span>
                </span>
            </ul>
            <p>...</p>
        </div>
    );
};

export default TodoItem;