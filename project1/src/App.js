import React, {useState} from 'react';
import './New.css';

function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem(){
    const item = {
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("");
    
  }
  return (
    <div className='Header'>
      <h1>To do List</h1>

      <input
      type="text"
      placeHolder="enter item"
      value={newItem}
      onChange={e => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>add</button>

      <ol>
        {items.map(item => {
          return(
            <li key={item.id}>{item.value}</li>
          )
        })}
      </ol>
    </div>
  )
}

export default App













// import React, {useState} from 'react'
// import PartOne from './cmponnets/PartOne';
// import Form from './cmponnets/Form';
// import TodoList from './cmponnets/TodoList';


// const App = () => {

//   const [input, setInput] = useState("");
//   const [todos, setTodos] = useState([]);
//   return (
//     <div className ="container">
//     <PartOne/>
//     <Form
//     input = {input}
//     setInput = {setInput}
//     todos    = {todos}
//     setTodods = {setTodos}
//      />
//      <TodoList
//      todos = {todos}
//      setTodos = {setTodos}
//      />
//     </div>
//     );
// };

// export default  App;


