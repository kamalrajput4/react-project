const { useState } = require("react");


function  Active(){
  const[data,setData]=useState(0);

  function set(){
    setData(data+1)

  }

  function set2(){
    setData(data-1);
  } 
  

  return(
    <div>
    <h1>{data}</h1>
    <button onClick={set}>+</button>
    <button onClick={set2}>-</button>
    </div>
  )
}
export default Active