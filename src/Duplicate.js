import React, { useState } from 'react'

import fireDb from './Coonection'

const Duplicate = () => {
    const[obj,setObj]=useState({username:" ",password:""})

    function set(e){
      setObj({...obj,[e.target.name]:e.target.value})
    }

    function save(){
      fireDb.child("new").push(obj)
      alert("data succcesfully")
    }


  return (
    <div>
      <input name='username' onChange={set} placeholder='Enter the name'></input>
      <input  name='password' onChange={set}placeholder='Enter the phone'></input>
      
      <button onClick={save}>save</button>
      {/* <button onClick={show}>show</button> */}
    </div>
  )
}

export default Duplicate
