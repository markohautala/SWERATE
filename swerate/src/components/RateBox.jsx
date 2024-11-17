import React, { useState, useEffect } from "react";
import MyChart from "./MyChart"; // Import the chart component

const RateBox = () => {
  const [rates, setRates] = useState([]); // Store all rates
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Get today's date and calculate the date 30 days ago
  const today = new Date();
  const toDate = today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  const fromDate = new Date(today);
  fromDate.setDate(today.getDate() - 30);
  const fromDateString = fromDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD

  // Fetch SWESTR data from the Riksbank API
  const fetchSwestrData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Construct the URL to fetch data for the last 30 days
      const url = `/api/swestr/v1/all/SWESTR?fromDate=${fromDateString}&toDate=${toDate}`;
      console.log("Constructed URL:", url); // For debugging

      // Fetch data from the API
      const response = await fetch(url, {
        headers: {
          "Cache-Control": "no-cache", // Required header
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      console.log("Fetched Data:", data); // For debugging

      // Prepare the data for charting
      if (data && data.length > 0) {
        // Map the data into a format for the chart
        const formattedData = data.map((item) => ({
          name: item.date, // The date for the x-axis
          uv: item.rate,   // The rate for the y-axis
        }));
        setRates(formattedData);
      } else {
        throw new Error("No rate data available for the selected date.");
      }
    } catch (err) {
      console.error("Error occurred while fetching:", err.message);
      setError(err.message || "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSwestrData();
  }, []);

  return (
    <div className="rate-box w-full max-w-screen-xl mx-auto px-4"> {/* Increase width of parent */}
      <h1>SWESTR Interest Rate</h1>

      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {rates.length > 0 && !loading && !error && (
        <div>
          <h2>SWESTR Rate Chart for Last 30 Days</h2>
          <h2>Källa / Source: Riksbanken</h2>
          <MyChart data={rates} /> {/* Pass the rates data to MyChart */}
        </div>
      )}
    </div>
  );
};

export default RateBox;
