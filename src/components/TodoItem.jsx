import React from 'react'

export const TodoItem = ({ todo, removeTodo }) => {
    const removeHandler = (id) => {
        removeTodo(id);
    }
    return (
        <div>
            {todo.text}
            <button onClick={() => removeHandler(todo.id)}>remove</button>
        </div>
    )
}
