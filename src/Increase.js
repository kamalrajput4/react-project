import React, { useState } from 'react'

function Increase() {
    var[obj,setObj]=(useState(0))

    function set1(){
        setObj(obj+1)
    }
     function set2(){
        setObj(obj-1)
    }





  return (
    <>
    <h1>{obj}</h1>
     <button onClick={set1}>+</button>
     <button onClick={set2}>-</button>
    </>
  )
}

export default Increase
