"use client"; // Add this line at the top

import { useEffect, useState } from "react"; // Import useEffect and useState
import GradientComponent from "@/components/GradientComponent"; // Ensure this path is correct
import ContentBoxes from "@/components/ContentBoxes"; // Ensure this path is correct

// Main component for the Home page
export default function Home() {
  // State to manage background color
  const [backgroundColor, setBackgroundColor] = useState("white"); // Set an initial color

  // Set the background color directly on the body tag
  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]); // Update the body background color when it changes

  return (
    <>
      <GradientComponent />
      <div className="flex items-center justify-center mt-4">
        {/* Icon and text side by side */}
        <h1 className="flex items-center text-4xl font-semibold" style={{ fontFamily: 'Roboto Slab, sans-serif', color: "whitesmoke" }}>
          {/* Material Icon with increased size */}
          <span className="material-symbols-outlined text-5xl mr-3" style={{ fontSize: '45px', color: "whitesmoke" }}>finance_mode</span>
          SWERATE
        </h1>
      </div>
      <ContentBoxes />
    </>
  );
}
