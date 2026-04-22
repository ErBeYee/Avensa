import { useNavigate } from "react-router-dom";
import "./Profile.css";
import React from 'react'

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="profile-container">
      <div className="profile-kiri">
        <div className="avatar"></div>
        <h4>khidir karawita</h4>
        <button className="btn-edit">Edit Profil</button>
        <p className="p">---</p>
      </div>

      <div className="profile">
        <h3>Data Diri</h3>

        <div className="form-group">
          <label>Nama</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Username</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Tanggal Lahir</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>No hp</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" />
        </div>

        <div className="form-group">
          <label>Alamat</label>
          <input type="text" />
        </div>

        <button className="btn-data-diri">Edit data diri</button>
        <button className="btn-keluar" onClick={() => navigate("/login")}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
