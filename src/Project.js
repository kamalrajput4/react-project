import React from 'react'
import { useNavigate } from 'react-router-dom';
import Radio from './Radio';
import { Link } from 'react-router-dom';

const Project = () => {
      let navigate = useNavigate();
    function set(){
      navigate('/signup');
   }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        
        <div className="flex justify-center gap-4 mb-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-400">Login</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-blue-400" onClick={set}>Signup</button>
        </div>

        <h1 className="text-2xl font-semibold text-center mb-6">Login Form</h1>

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

        <h2 className="text-sm text-blue-600 hover:underline cursor-pointer mb-4">
          Forgot Password?
        </h2>

        <button className="w-full py-2 bg-blue-600 text-white rounded-md ">
          Login
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Not a member? <Link to='/signup' className="text-blue-600  cursor-pointer">Singup</Link>
        </p>
      </div>
    </div>
  )
}

export default Project
