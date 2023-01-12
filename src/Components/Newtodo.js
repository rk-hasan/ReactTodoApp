import React, { useState } from 'react';

const Newtodo = (props) => {
    const [Data, Setdata] = useState({name: '', address: ''});
    
    const handleChange = (event)=>{
        const FiledName = event.target.name;
        Setdata(oldvalue =>{
            return {...oldvalue, [FiledName]:event.target.value}
        })
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        props.onData(Data);
        Setnewtodo({title: "", desc: ""})
    }
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' value={Data.name} onChange={handleChange}/>
            <br/><br/>
            <label htmlFor='address'>Address:</label>
            <textarea name='address' value={Data.address} onChange={handleChange}/>
            <br/><br/>
            <button>Save</button>
        </form>
    </div>
  )
}

export default Newtodo
