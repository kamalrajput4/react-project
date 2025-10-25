import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Log = () => {
  const [obj, setObj] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  function handle(e) {
    setObj({ ...obj, [e.target.name]: e.target.value });
  }

  function store() {
    if (obj.username === "komal" && obj.password === "komal123") {
      alert("Successful Login");
      navigate("/upload");
    } else {
      alert("Wrong username or password");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-red-100 to-red-300">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-red-800">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">
            Username
          </label>
          <input
            name="username"
            onChange={handle}
            id="username"
            placeholder="Enter your username"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            type="text"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            name="password"
            onChange={handle}
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            type="password"
          />
        </div>

        <button
          onClick={store}
          className="w-full bg-red-800 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Log;
