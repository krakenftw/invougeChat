"use client";
import { LineChart, Line } from "recharts";
export default function VisitorChart() {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 24000 },
    { name: "Page B", uv: 300, pv: 1400, amt: 34000 },
  ];

  return (
    <div className="border-[1px] border-border p-4 rounded-lg">
      <LineChart width={400} height={400} data={data}>
        <Line type={"monotone"} data={"pv"} stroke="#000" />
      </LineChart>
    </div>
  );
}
