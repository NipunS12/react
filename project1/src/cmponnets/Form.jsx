import React from 'react';
import {v4 as uuidv4} from "uuid";

const form = ({input , setInput , todos , setTodos}) => {

  const onInputChange = (event) =>{
    setInput(event.target.value);
  };

  const onFormSubmit = (event) =>{
    event.preventDefault();
    setTodos([...todos, {id: uuidv4(), title:input, completed: false}]);
    setInput("");
  };
  return (
   <div>
    <form onSubmit = {onFormSubmit}>
    <input type="text" placeholder='enter some one' value={input} onChange = {onInputChange}  />
    <button>Add</button>
    </form>
   </div>
  )
}

export default form;