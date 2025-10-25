import React, { useState } from 'react'
import fireDb from './Connection'

const Set = () => {
    const[data,setData]=useState({
        Name:"",
        Phone:"",
        Address:""

    })
    const[show,setShow]=useState({})
    function set(e){
        setData({...data,[e.target.name]:e.target.value})
    }
    function save(){
        fireDb.child('Record').push(data)
    }

    function store(){
        fireDb.child("Record").once("value",function(event){
            setShow(event.val())

        })
    }





  return (
   <><input name="Name" onChange={set} placeholder='Enter The Name'></input>
   <input name="Phone"onChange={set} placeholder='Enter The Phone'></input>
   <input name="Address"onChange={set}placeholder='Enter The Address'></input>
   <button onClick={save}>Save</button>
   <button onClick={store} >Show</button>
   <br>
   </br>
   <table>
    <th>Name</th>
    <th>Phone</th>
    <th>Address</th>
    <tbody>
                {
                    Object.keys(show).map(function(key){
                        // console.log(data[key].Address);
                        return(
                            <tr>
                                <td>{show[key].Name}</td>
                                <td>{show[key].Phone}</td>
                                <td>{show[key].Address}</td>
                            </tr>
                        )
                        
                    })
                    
                } 
                </tbody>
   </table>
   
   
   
   
   </>
  )
}

export default Set
