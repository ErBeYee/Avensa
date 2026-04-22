import { Cell, Pie, PieChart } from "recharts";
import "./Dashboard.css";
import React from "react";
React

const Dashboard = () => {
  const data = [
    { name: "A", value: 97 },
    { name: "B", value: 3 },
  ];

  const colors = [
    ["#10b981", "#e5e7eb"],
    ["#3b82f6", "#e5e7eb"],
    ["#6366f1", "#e5e7eb"],
    ["#06b6d4", "#e5e7eb"],
  ];

  return (
    <div className="dashboard-container">
      <h3 className="title">Persentase</h3>

      {/* 🔥 1 CARD BESAR */}
      <div className="card">
        <div className="charts">
          {colors.map((color, i) => (
            <div className="chart-item" key={i}>
              <PieChart width={160} height={160}>
                <Pie
                  data={data}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={70}
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={color[index]} />
                  ))}
                </Pie>

                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text"
                >
                  97%
                </text>
              </PieChart>

              <p className="label">Keseluruhan</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
