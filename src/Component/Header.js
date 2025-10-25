import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-white-900 text-black py-2 flex gap-4 justify-center">
      <div><Link to='/' className="hover:text-gray-300 transition">Home</Link></div>
      <div><Link to='/about' className="hover:text-gray-300 transition">About</Link></div>
      <div><Link to='/contact' className="hover:text-gray-300 transition">Contact</Link></div>
      <div><Link to='/gallery' className="hover:text-gray-300 transition">Gallery</Link></div>
      <div><Link to='/login' className="hover:text-gray-300 transition">Login</Link></div>
    </div>
  );
}

export default Header;
