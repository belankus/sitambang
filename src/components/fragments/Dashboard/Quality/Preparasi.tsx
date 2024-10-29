import DashboardLayout from "../Main";

export default function PreparasiContent() {
  return (
    <DashboardLayout>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>FOTO</th>
            <th>WAKTU</th>
            <th>LOKASI</th>
            <th>LOT SAMPLING</th>
            <th>METODOLOGI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">1.</td>
            <td>FOTO</td>
            <td>WAKTU</td>
            <td>LOKASI</td>
            <td>LOT SAMPLING</td>
            <td>METODOLOGI</td>
          </tr>
        </tbody>
      </table>
    </DashboardLayout>
  );
}
