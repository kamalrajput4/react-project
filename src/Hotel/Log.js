import React, { useState } from 'react';

const Log = () => {

    const[obj,setObj]=useState({username:"",password:""})

    function handle(e){
      setObj({...obj, [e.target.name]:e.target.value})
    }   

    function store(){
      if(obj.username=="komal" && obj.password==="kamal123"){
         alert("successful Data")
      }
      else{
        alert("wrong username and password")
      }
    }
  return (

    
    
    <div>
    


        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Username
          </label>
          <input name="username" onChange={handle}
            id="username"
            placeholder="Enter your username"
            className=" px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            type="text"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input name="password" onChange={handle}
            id="password"
            placeholder="Enter your password"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            type="password"

          />
          <button onClick={store} className=" bg-red-900 text-white py-2 rounded hover:bg-red-700 transition ml-10 px-10">
          Login
        </button>
        </div>

        
      </div>
    
  );
};

export default Log;
