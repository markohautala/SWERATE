import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const MyChart = ({ data }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-lg border-2 border-white border-opacity-30 rounded-xl p-6 shadow-lg my-6">
      {/* Responsive Container for better responsiveness */}
      <ResponsiveContainer width="90%" height={400}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          {/* Define linear gradient fills for areas */}
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9BD5B1" stopOpacity={0.8} /> {/* Blue color */}
              <stop offset="95%" stopColor="#9BD5B1" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* X Axis */}
          <XAxis dataKey="name" />
          {/* Y Axis */}
          <YAxis domain={[1.5, 'auto']} />
          {/* Cartesian Grid */}
          <CartesianGrid strokeDasharray="3 3" />
          {/* Tooltip */}
          <Tooltip />
          {/* Legend */}
          <Legend />

          {/* Area for uv rate with the new color and gradient fill */}
          <Area type="monotone" dataKey="uv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyChart;
