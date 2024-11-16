import React, { useState, useEffect } from "react";

const RateBox = () => {
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fromDate = "2024-11-14"; // Define your fromDate here

  // Fetch SWESTR data from the Riksbank API
  const fetchSwestrData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Corrected URL to call the proxy route
      const url = `/api/swestr/v1/all/SWESTR?fromDate=${fromDate}`;
      console.log("Constructed URL:", url); // For debugging

      // Fetch data from the API through the proxy
      const response = await fetch(url, {
        headers: {
          "Cache-Control": "no-cache", // Required header
        },
      });

      // Check if the response is successful (status 200)
      if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
      }

      // Parse the JSON response
      const data = await response.json();
      console.log("Fetched Data:", data); // For debugging

      // Check if the data array is not empty
      if (data && data.length > 0) {
        setRate(data[0].rate); // Set the rate from the first item in the data array
      } else {
        throw new Error("No rate data available for the selected date.");
      }
    } catch (err) {
      console.error("Error occurred while fetching:", err.message);
      setError(err.message || "An unknown error occurred.");
    } finally {
      setLoading(false); // Set loading to false after the API call is complete
    }
  };


  // Use useEffect to trigger the data fetch on component mount
  useEffect(() => {
    fetchSwestrData(); // Fetch SWESTR data when the component mounts
  }, []);

  // Render the component
  return (
    <div className="rate-box">
      <h1>SWESTR Interest Rate</h1>

      {loading && <p>Loading data...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {rate !== null && !loading && !error && (
        <div>
          <h2>Rate on {fromDate}: {rate}%</h2>
        </div>
      )}
    </div>
  );
};

export default RateBox;
