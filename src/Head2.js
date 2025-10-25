import React from 'react';
import { Link } from 'react-router-dom';

const Head2 = () => {
  return (
    <div className="bg-gradient-to-r from-red-900 to-red-600 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-center gap-12">
        <Link
          to="/upgallery"
          className="hover:bg-white hover:text-red-700 px-5 py-2 rounded transition duration-300 font-semibold"
        >
          Upload Gallery
        </Link>
        <Link
          to="/upcontact"
          className="hover:bg-white hover:text-red-700 px-5 py-2 rounded transition duration-300 font-semibold"
        >
          Upload Contact
        </Link>

        <Link
          to="/regis"
          className="hover:bg-white hover:text-red-700 px-5 py-2 rounded transition duration-300 font-semibold"
        >
          Registration
        </Link>
      </div>
    </div>
  );
};

export default Head2;
