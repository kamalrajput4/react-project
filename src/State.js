import React, { useState } from 'react';
// import fireBase from './NewConnection'
import { useNavigate } from 'react-router-dom';
import fireDb from'./Coonection'

const State = () => {
  const [data, setdata] = useState({
    Name: '',
    Phone: '',
    Email: '',
  });
  let navigate = useNavigate();

  function handleChange(e) {
    setdata({ ...data, [e.target.name]: e.target.value });
  }

  function save() {
  
    fireDb.child("news").push(data)
      
  }

  function handleSaveClick() {
    
    navigate('/stuck');

    save();
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Registration Form</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            name="Name"
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Phone</label>
          <input
            name="Phone"
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            name="Email"
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          onClick={handleSaveClick}  // This button now performs the navigation and save
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default State;
