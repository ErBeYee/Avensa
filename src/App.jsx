import Login from "./Component/Login/Login.jsx";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./Component/DashboardLayout/DashboardLayout.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import React from "react";
React

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />

        {/* Absensi */}
      </Route>
    </Routes>
  );
}

export default App;
