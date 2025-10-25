import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-red-800 mb-6">About Our Hotel</h1>

        <p className="text-gray-700 mb-4">
          Welcome to <span className="font-semibold text-red-700">Royal Comfort Hotel</span>, where luxury meets tradition.
          Nestled in the heart of the city, our hotel offers a perfect blend of comfort, elegance, and world-class hospitality.
          Whether you're here for a business trip, a relaxing vacation, or a special occasion, we are dedicated to making your stay unforgettable.
        </p>

        <p className="text-gray-700 mb-4">
          With beautifully designed rooms, fine dining experiences, and personalized services, we aim to exceed your expectations.
          Our team is committed to delivering excellence in every detail — from the moment you check in to the time you leave.
        </p>

        <p className="text-gray-700 mb-4">
          We also offer facilities such as a rooftop lounge, spa & wellness center, conference halls, and 24/7 concierge support.
          Your comfort is our priority, and we constantly strive to provide a warm and welcoming environment.
        </p>

        <p className="text-gray-700">
          Thank you for choosing Royal Comfort Hotel — we look forward to hosting you!
        </p>
      </div>
    </div>
  );
};

export default About;
