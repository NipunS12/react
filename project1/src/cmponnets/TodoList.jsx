import React from 'react'

const TodoList = ({ todos, setTodos }) => {
  
  const handleOnChange = (event, id) => {
    event.preventDefault()

    const todoListCopy = [...todos]

    const editTodo = todoListCopy.map(item =>
      item.id === id
        ? { ...item, title: event.target.value, completed: true }
        : item
    )

    setTodos(editTodo)
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type='text'
            value={todo.title}
            onChange={event => handleOnChange(event, todo.id)}
          />
          <span>{todo.completed ? 'edited ✔️' : 'not edited ❌'}</span>
        </li>
      ))}
    </div>
  )
}

export default TodoList
