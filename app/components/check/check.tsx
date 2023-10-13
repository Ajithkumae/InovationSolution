'use client';
import React, { useState, useEffect } from 'react';

const VisionMissionCard = () => {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowCard(true);
    }, 1000);
  }, []);
  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-6 transition-opacity ${
        showCard ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:scale-110 hover:bg-indigo-500 duration-300">
          Our Vision
        </h2>
        <p className="text-gray-600">
          To create a better world through innovative solutions and
          collaboration.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h2>
        <p className="text-gray-600">
          Empower individuals and organizations to achieve their goals by
          providing top-notch products and services.
        </p>
      </div>
    </div>
  );
};

export default VisionMissionCard;
