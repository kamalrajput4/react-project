import React, { useEffect, useState } from 'react'
import Front from './Front'
import { useParams } from 'react-router-dom'
import fireDb from './Coonection'

const Rem = () => {
  const [data,setdata] = useState({})
  const param = useParams()
  useEffect(()=>{
    fireDb.child("Record").child(param.id).on("value",(snapshot)=>{
      if(snapshot.val()){
        setdata(snapshot.val())
      } else {
        setdata({})
      }
    })

  },[param.id])
  
  
  return (
    <div>
      <Front/>
      <h1>About page</h1>
      <h2>{data.Phone}</h2>
      
    </div>
  )
}

export default Rem