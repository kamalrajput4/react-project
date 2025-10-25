import React from 'react';
import Head2 from './Head2';

const Upcontact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head2 />

      <div className="max-w-3xl mx-auto p-6 mt-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4 text-red-800">Upload Hotel Contact Info</h1>

        <p className="mb-6 text-gray-700">
          Provide your hotel's contact details so guests can reach out for bookings, inquiries, or support. 
          Ensure all fields are accurate and up to date.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-semibold text-gray-800">Hotel Name</label>
            <input
              type="text"
              placeholder="e.g. Grand Palace Hotel"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-800">Phone Number</label>
            <input
              type="tel"
              placeholder="e.g. +91 98765 43210"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-800">Email Address</label>
            <input
              type="email"
              placeholder="e.g. contact@grandpalace.com"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-800">Hotel Address</label>
            <textarea
              rows="3"
              placeholder="e.g. 123 MG Road, New Delhi, India"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-800 text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            Save Contact Info
          </button>
        </form>
      </div>
    </div>
  );
};

export default Upcontact;
