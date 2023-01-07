import React from 'react';

const Todo = (props) => {
  const {name,address} = props.todoItem;
  const id = props.id;

  const handleDelete = (id)=>{
    props.todoId(id)
  }
   
  return (
    <div>
        <h3>Name:{name}</h3>
        <p>Address:{address}</p>
        <button onClick={()=>{handleDelete(id)}}>Delete</button>
    </div>
  )
}

export default Todo