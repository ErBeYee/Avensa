import { Outlet } from "react-router-dom";
import "./DashboardLayout.css";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import React from "react";


const DashboardLayout = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <main className="dashboard-content">
          {/* context itu global */}
          <Outlet context={{ search }} />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
