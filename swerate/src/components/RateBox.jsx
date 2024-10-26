"use client"; // Add this line at the top

import React from 'react';

const RateBox = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white/20 backdrop-blur-lg border border-white/20 rounded-lg p-12 m-4 flex flex-col items-center justify-center">
        <span className="text-white text-6xl font-bold">SWESTR RATE: 2,75%</span>
        <p className="text-white mt-4">Källa: Sveriges riksbank</p> {/* Add margin-top for spacing */}
      </div>
    </div>
  );
};

export default RateBox;
