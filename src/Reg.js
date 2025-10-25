import React, { useState } from 'react'

function Reg() {
   const[name,setName]=useState("")
   const[phone,setPhone]=useState("")
   const[address,setAddress]=useState("")

function set1(e){
    setName(e.target.value)
}
function set2(e){
    setPhone(e.target.value)
}
function set3(e){
    setAddress(e.target.value)
}
  return (
    <div>
    <input onChange={set1} placeholder='Enter The Name'></input><br></br>
     <input onChange={set2} placeholder='Enter The Phone'></input><br></br>
      <input onChange={set3} placeholder='Enter The Address'></input>
    </div>
  )
}
export default Reg
