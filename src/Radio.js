import React from 'react'
import { useNavigate } from 'react-router-dom'

const Radio= () => {
  let navigate=useNavigate();
   
  function holder(){
    navigate('/')
  }
   
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        
        <div className="flex justify-center gap-4 mb-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-400" onClick={holder}>Login</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-blue-400" >Signup</button>
        </div>

        <h1 className="text-2xl font-semibold text-center mb-6">Signup Form</h1>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      

        <button className="w-full py-2 bg-blue-600 text-white rounded-md ">
          Singup
        </button>

        
      </div>
    </div>
  )
}

export default Radio
