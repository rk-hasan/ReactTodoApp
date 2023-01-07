import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  const handleTodoId = (id)=>{
    props.ontodoId(id);
  }
  
  return (
    <div>
       {props.todoData.map((item)=>(
        <Todo todoItem={item.data} key={item.id} id={item.id} todoId={handleTodoId}/>
       ))}
    </div>
  )
}

export default Todos