import React, { useEffect, useState } from 'react'

function Localarr() {
    const [obj, setObj] = useState({
        Name: '',
        Phone: '',
        Address: ''
    })
    const[arr,setArr]= useState([])
    function set1(e) {
  
        setObj({...obj,[e.target.name]:e.target.value})
        // setObj()
    }

    function save()
    {
         setArr([...arr,obj])
    }

    useEffect(function(){
             localStorage.setItem("first",JSON.stringify(arr))
    })


    return (
        <div>   
             
            <input onChange={set1} name='Name' type="text" id="txtName" placeholder='Enter Name:' /> <br />
            <input onChange={set1} name='Phone' type="text" id="txtPhone" placeholder='Enter Phone:' /> <br />
            <input onChange={set1} name='Address' type="text" id="txtAddress" placeholder='Enter Address:' /> <br />
            <button onClick={save}>Save</button>
        </div>
    )
}

export default Localarr