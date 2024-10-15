// Mark this file as a Client Component
"use client"; // Add this line at the top

import React from 'react';

const RateBox = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white/30 backdrop-blur-lg border border-white/30 rounded-lg w-52 h-52 flex items-center justify-center">
        <span className="text-white text-6xl font-bold">2,75%</span>
      </div>
    </div>
  );
};

export default RateBox;
