import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-red-800 mb-6">Contact Us</h1>

        <p className="text-gray-700 mb-4">
          We’d love to hear from you! Whether you have questions about bookings, services, or events — feel free to reach out.
        </p>

        <div className="space-y-4 text-gray-800">
          <div>
            <span className="font-semibold text-red-700">📍 Address:</span> <br />
            Royal Comfort Hotel, 123 MG Road, New Delhi, India
          </div>

          <div>
            <span className="font-semibold text-red-700">📞 Phone:</span> <br />
            +91 98765 43210
          </div>

          <div>
            <span className="font-semibold text-red-700">📧 Email:</span> <br />
            support@royalcomforthotel.com
          </div>

          <div>
            <span className="font-semibold text-red-700">⏰ Working Hours:</span> <br />
            Mon - Sun: 9:00 AM – 10:00 PM
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
