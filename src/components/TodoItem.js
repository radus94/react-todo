import React from "react";

export default function Todo({todo, index, completeTodo, deleteTodo}) {
    return (
        <li
            className="todo"
        >
            <label>
                <input
                    type="checkbox"
                    defaultChecked={todo.isCompleted}
                    onClick={() => completeTodo(index)}
                />
                <span>{todo.title}</span>
            </label>
            <i className="material-icons red-text" onClick={() => deleteTodo(index)}>delete</i>
        </li>
    )
}
