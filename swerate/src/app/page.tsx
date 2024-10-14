// Mark this file as a Client Component
"use client"; // Add this line at the top

import { useEffect, useState } from "react"; // Import useEffect and useState
import GradientComponent from "@/components/GradientComponent"; // Ensure this path is correct

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
      <div>
        <h1>SWERATE</h1>
      </div>
    </>
  );
}
