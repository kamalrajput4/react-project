import React from 'react';
import Head2 from './Head2';

const Uploadnews = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <Head2 />

      <div className="max-w-3xl mx-auto p-6 mt-6 bg-white shadow-md rounded-md border border-blue-100">
        <h1 className="text-2xl font-bold mb-4 text-blue-800">Upload Hotel News & Announcements</h1>

        <p className="mb-6 text-gray-700">
          Keep your guests informed about the latest events, offers, and announcements at your hotel. 
          Add news updates regularly to maintain engagement and trust.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-semibold text-gray-800">News Title</label>
            <input
              type="text"
              placeholder="e.g. Summer Offer 2025"
              className="w-full px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-800">News Content</label>
            <textarea
              rows="5"
              placeholder="Write your news content here..."
              className="w-full px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-800">Publish Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Publish News
          </button>
        </form>
      </div>
    </div>
  );
};

export default Uploadnews;
