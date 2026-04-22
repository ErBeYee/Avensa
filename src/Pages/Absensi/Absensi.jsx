import "./Absensi.css";

const Absensi = () => {
  return (
    <div className="absensi-container">
      <div className="absensi-header">
        <h3>Absensi Mahasantri</h3>
      </div>

      {/* Tabel santri */}
      <div className="table-mahasantri">
        <table border={1}>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Mahasantri</th>
              <th>Hadir</th>
              <th>Sakit</th>
              <th>Izin</th>
              <th>Alpa</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Rebby Padang </td>
              <td></td>
              <td></td>
              <td></td>
              <td>✓</td>
              <td>Malas dia suka molor dan budeq di bangunin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Absensi;
