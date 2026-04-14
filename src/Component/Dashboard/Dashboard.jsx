import React from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // hapus token
    localStorage.removeItem("token");

    // redirect ke login
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <ul>
        <li className="active">Dashboard</li>
        <li>Absensi</li>
        <li>History</li>
        <li>Profil</li>

        <hr />

        <li>Service</li>
        <li>Pengaturan</li>

        <hr />

        {/* 🔥 LOGOUT */}
        <li
          onClick={handleLogout}
          style={{ color: "red", cursor: "pointer" }}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;