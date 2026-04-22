import "./Absensi.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Absensi = () => {
  const [mahasantri, setMahasantri] = useState([]);
  const [solat, setSolat] = useState("");
  const [absensi, setAbsensi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("/api/mahasantri/findall", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(token);

        console.log(res.data.data);

        setMahasantri(res.data.data);
      } catch (error) {
        console.log("ERROR:", error.response?.data || error.message);
      }
    };

    fetchData();
  }, []);

const handleChange = (item, status) => {
  if (!solat) {
    alert("Pilih sholat dulu!");
    return;
  }

  setAbsensi((prev) => {
    const existing = prev.find((i) => i.inputName === item.nama_santri);

    if (existing) {
      return prev.map((i) =>
        i.inputName === item.nama_santri
          ? { ...i, status, solat }
          : i
        );
      } else {
      console.log("SOLAT:", solat);
      return [
        ...prev,
        {
          inputName: item.nama_santri,
          solat,
          status,
        },
      ];
    }
  });
};
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!solat) {
        alert("Pilih sholat dulu!");
        return;
      }

      if (absensi.length === 0) {
        alert("Isi absensi dulu!");
        return;
      }

      console.log("DATA DIKIRIM:", absensi);

      for (const item of absensi) {
        await axios.post(
          "/api/absensi/solat",
          {
            inputName: item.inputName,
            solat: item.solat,
            status: item.status,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
      }

      alert("Absensi berhasil disimpan!");
      setAbsensi([]);
    } catch (error) {
      console.log("ERROR:", error.response?.data || error.message);
      alert("Gagal kirim absensi!");
    }
  };
  return (
    <div className="absensi-container">
      <h3>Absensi Mahasantri</h3>
      <div style={{ marginBottom: "15px" }}>
        <label>Pilih Sholat: </label>
        <select value={solat} onChange={(e) => setSolat(e.target.value)}>
          <option value="">-- Pilih --</option>
          <option value="shubuh">Subuh</option>
          <option value="dzuhur">Dzuhur</option>
          <option value="ashar">Ashar</option>
          <option value="maghrib">Maghrib</option>
          <option value="isya'">Isya'</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Mahasantri</th>
            <th>Hadir</th>
            <th>Sakit</th>
            <th>Absen</th>
          </tr>
        </thead>

        <tbody>
          {mahasantri.slice(0, 40).map((item, index) => (
            <tr key={item.id || index}>
              <td>{index + 1}</td>
              <td>{item.nama_santri}</td>
              <td>
                <input
                  type="radio"
                  name={`absen-${item.id}`}
                  onChange={() => handleChange(item, "hadir")}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`absen-${item.id}`}
                  onChange={() => handleChange(item, "sakit")}
                />
              </td>

              <td>
                <input
                  type="radio"
                  name={`absen-${item.id}`}
                  onChange={() => handleChange(item, "absen")}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit}>Simpan Absensi</button>
    </div>
  );
};

export default Absensi;
