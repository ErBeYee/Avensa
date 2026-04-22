import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import React from "react";


const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/dashboard" end>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/absensi">Absensi</NavLink>
        </li>

        <li>
          <NavLink to="/history">History</NavLink>
        </li>

        <li>
          <NavLink to="/profil">Profil</NavLink>
        </li>

        <hr />
        <li>
          <NavLink to="/service">Service</NavLink>
        </li>
        <li>
          <NavLink to="/pengaturan">Pengaturan</NavLink>
        </li>
        <hr />

        <li>
          <button
            onClick={handleLogout}
            style={{ color: "red", cursor: "pointer" }}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
