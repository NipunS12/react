import React, { useState } from 'react'
import PartOne from './cmponnets/PartOne'
import Form from './cmponnets/Form'
import TodoList from './cmponnets/TodoList'

const App = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  console.log(input, 'input')
  return (
    <div className='container'>
      <PartOne />
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
