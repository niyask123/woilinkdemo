import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  AreaChart,
  Area,
} from "recharts";

const data = [
  { name: "Business Cards", total: 120, max: 200, growth: 30, revenue: 500 },
  { name: "QR Codes", total: 80, max: 150, growth: 20, revenue: 350 },
];

const pieData = [
  { name: "Used", value: 120 },
  { name: "Remaining", value: 80 },
];

const COLORS = ["#0088FE", "#FFBB28"];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-md rounded-lg text-sm">
        <p className="font-bold">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-gray-700" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const Chart = () => {
  return (
    <div className="bg-white shadow-lg ">
      <div className="grid grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="bg-gray-100 p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-center">Total Usage</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="total" fill="#8884d8" barSize={40} />
              <Bar dataKey="max" fill="#82ca9d" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-gray-100 p-4 rounded-xl shadow-md flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4 text-center">Usage Percentage</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Tooltip content={<CustomTooltip />} />
              <Pie data={pieData} dataKey="value" outerRadius={80} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-gray-100 p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-center">Growth Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Legend />
              <Line type="monotone" dataKey="growth" stroke="#FF8042" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Area Chart */}
        {/* <div className="bg-gray-100 p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-center">Revenue Trends</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Legend />
              <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </ResponsiveContainer>
        </div> */}
      </div>
    </div>
  );
};

export default Chart;
