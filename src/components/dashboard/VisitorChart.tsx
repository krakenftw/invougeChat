"use client";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export default function VisitorChart() {
  const data = [
    { month: "Jan", users: 400 },
    { month: "Feb", users: 600 },
    { month: "Mar", users: 800 },
    { month: "Apr", users: 1000 },
    { month: "May", users: 1500 },
    { month: "Jun", users: 2000 },
    { month: "Jul", users: 2500 },
    { month: "Aug", users: 3000 },
    { month: "Sep", users: 3500 },
    { month: "Oct", users: 4000 },
    { month: "Nov", users: 4500 },
    { month: "Dec", users: 5000 },
  ];
  return (
    <div className="border border-border md:p-4 rounded-lg">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="users" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
