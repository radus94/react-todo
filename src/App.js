import React, { useState, useReducer } from 'react'
import TodoForm from "./components/AddTodo";
import Todo from "./components/TodoItem";
import reducer from './reducer'

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
