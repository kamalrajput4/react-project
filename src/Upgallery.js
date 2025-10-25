import React from 'react';
import Head2 from './Head2';

const Upgallery = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head2 />

      <div className="max-w-4xl mx-auto p-6 mt-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4 text-red-800">Upload Hotel Gallery</h1>

        <p className="mb-6 text-gray-700">
          Showcase your hotel's ambience, rooms, dining area, and other amenities by uploading high-quality images. 
          These images help customers get a real feel of your property before booking.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-gray-800">Image Title</label>
            <input
              type="text"
              placeholder="e.g. Deluxe Room View"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-800">Select Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-white focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-red-800 text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            Upload Image
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Uploaded Images (Preview)</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="border p-2 rounded shadow-sm">
              
              <p className="mt-2 text-sm text-center text-gray-600">Deluxe Room</p>
            </div>
            <div className="border p-2 rounded shadow-sm">

              <p className="mt-2 text-sm text-center text-gray-600">Hotel Lobby</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upgallery;
