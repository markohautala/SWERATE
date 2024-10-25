// ContentBoxes.jsx
import React, { useState, useEffect } from 'react';
import RateBox from '@/components/RateBox';
import Loading from './Loader'; // Use relative import since they are in the same folder

const ContentBoxes = () => {
  const [isLoading, setIsLoading] = useState(true);


  // Show the loader for 3 seconds before rendering the content
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loader for 3 seconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;  // This is the loader component
  }



  return (
    <div className="flex items-center justify-center min-h-screen">
      <RateBox />
    </div>
  );
};

export default ContentBoxes;
