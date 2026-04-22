import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import React from "react";
import { jwtDecode } from "jwt-decode";

const Sidebar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = token ? jwtDecode(token) : null;
  const role = user?.role;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <ul>
        {/* Dashboard selalu ada */}
        <li>
          <NavLink to="" end>
            Dashboard
          </NavLink>
        </li>

        {role === "admin" && (
          <>
            <li>
              <NavLink to="absensi">Absensi</NavLink>
            </li>

            <li>
              <NavLink to="history">History</NavLink>
            </li>

            <li>
              <NavLink to="profil">Profil</NavLink>
            </li>

            <hr />

            <li>
              <NavLink to="service">Service</NavLink>
            </li>

            <li>
              <NavLink to="/pengaturan">Pengaturan</NavLink>
            </li>

            <hr />
          </>
        )}

        {/* Logout tetap ada */}
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