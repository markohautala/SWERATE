import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import TailwindModal from "./TailwindModal"; // Import the modal component

const MyChart = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  return (
    <div className="relative bg-white bg-opacity-10 backdrop-blur-lg border-2 border-white border-opacity-30 rounded-xl p-6 shadow-lg my-6">
      {/* Gear Icon */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setIsModalOpen(true)} // Open modal on click
          className="text-gray-300 hover:text-gray-100 focus:outline-none"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "40px" }}
          >
            settings
          </span>
        </button>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="95%" height={450}>
        <AreaChart data={data} margin={{ top: 10, right: 5, left: -30, bottom: 0 }}>
          <defs>
            <linearGradient id="colorSwerate" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9BD5B1" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#9BD5B1" stopOpacity={0} />
            </linearGradient>
          </defs>
          {/* X Axis */}
          <XAxis
            dataKey="name"
            stroke="#FFFFFF" // White text for the X axis
            tick={{ fill: "#FFFFFF" }} // White color for tick labels
            tickLine={false}
            style={{ fontSize: "12px" }}
          />
          {/* Y Axis */}
          <YAxis
            domain={[2.2, "auto"]}
            stroke="#FFFFFF" // White text for the Y axis
            tick={{ fill: "#FFFFFF" }} // White color for tick labels
            style={{ fontSize: "15px" }}
          />
          {/* Cartesian Grid */}
          <CartesianGrid strokeDasharray="3 3" stroke="#444" /> {/* Subtle dark grid */}
          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Slightly transparent tooltip
              border: "1px solid #FFFFFF",
              color: "#FFFFFF",
            }}
            itemStyle={{ color: "#FFFFFF" }} // Tooltip text color
          />
          {/* Legend */}
          <Legend
            wrapperStyle={{ color: "#FFFFFF" }} // White text for legend
          />
          {/* Area Chart */}
          <Area
            type="monotone"
            dataKey="swerate" // Updated dataKey
            stroke="#82ca9d"
            dot={true}
            fillOpacity={1}
            fill="url(#colorSwerate)" // Updated gradient ID
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Modal */}
      <TailwindModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default MyChart;
