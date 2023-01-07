import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Newtodo from './Newtodo';
import Todos from './Todos';

const Home = () => {
  const [todo, Settodo] = useState([])
  const handleData = (data)=>{
    Settodo(oldValue=>{
      return [...oldValue, {id: uuidv4(), data}]
    }) 
  }

  const handleRemove = (id)=>{
    Settodo(oldValue =>{
     return  oldValue.filter(item => item.id !== id)
    })
  }
  return (
    <div>
        <Newtodo onData={handleData}/>
        <Todos todoData={todo} ontodoId={handleRemove}/>
    </div>
  )
}

export default Home