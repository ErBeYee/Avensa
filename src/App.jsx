import Login from "./Component/Login/Login.jsx";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./Component/DashboardLayout/DashboardLayout.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Absensi from "./Pages/Absensi/Absensi.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import History from "./Pages/History/History.jsx";
import Service from "./Pages/Service/Service.jsx";
import Pengaturan from "./Pages/Pengaturan/Pengaturan.jsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />

        {/* Absensi */}
        <Route path="/dashboard/absensi" element={<Absensi />} />

        {/* Profile */}
        <Route path="/dashboard/profil" element={<Profile />} />

        {/* History */}
        <Route path="/dashboard/history" element={<History />} />

        {/* Service */}
        <Route path="/dashboard/service" element={<Service />} />

        {/* Pengaturan */}
        <Route path="/dashboard/pengaturan" element={<Pengaturan />} />
      </Route>
    </Routes>
  );
}

export default App;
