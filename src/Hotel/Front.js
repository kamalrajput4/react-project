import React from 'react'
import { Link } from 'react-router-dom';
const Front = () => {
  return (
    <div className="bg-white-900 text-black py-2 flex gap-10 justify-center" style={{marginBottom:'500px'}}>
      <div><Link to='/' className="hover:text-gray-300 transition">Home</Link></div>
      <div><Link to='/about' className="hover:text-gray-300 transition">About</Link></div>
      <div><Link to='/contact' className="hover:text-gray-300 transition">Contact</Link></div>
      <div><Link to='/gallery' className="hover:text-gray-300 transition">Gallery</Link></div>
      <div><Link to='/log' >Login</Link></div>
    </div>
  );
}
   

export default Front
