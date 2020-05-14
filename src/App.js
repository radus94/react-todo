
import React, { useState, useReducer } from 'react'
import reducer from './reducer'


function Todo({todo, index, completeTodo, deleteTodo}) {
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

function TodoForm({addTodo}) {
    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    }
    return (
        <form className="input-field" onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add todo..."
                onChange={e=>setValue(e.target.value)} />
            <label>Todo name</label>
        </form>
    )
}

export default function App() {

  const [state] = useReducer(reducer, JSON.parse(localStorage.getItem('TodoStorage')) || [])

  const [todos, setTodos] = useState(state);

  const addTodo = (title, isCompleted) => {
      const newTodos = [...todos, { title , isCompleted}];
      setTodos(newTodos)
      localStorage.setItem('TodoStorage', JSON.stringify(newTodos))
  };

  const completeTodo = index => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = newTodos[index].isCompleted !== true;
      setTodos(newTodos)
      localStorage.setItem('TodoStorage', JSON.stringify(newTodos))
  }

  const deleteTodo = index => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos)
      localStorage.setItem('TodoStorage', JSON.stringify(newTodos))
  }

  return (
      <div className="container">
          <h1>Todo app</h1>
          <TodoForm addTodo={addTodo} />
          <div>
              {todos.map((todo, index) => (
                  <Todo
                      key={index}
                      index={index}
                      todo={todo}
                      completeTodo={completeTodo}
                      deleteTodo={deleteTodo}
                  />
              ))}
          </div>
      </div>
  )
}
