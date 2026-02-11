import Layout from "../components/Layout";

function Attendance() {
  // Dummy attendance data (later from backend)
  const attendanceData = [
    { date: "2025-02-01", checkIn: "09:00 AM", lateMinutes: 0 },
    { date: "2025-02-02", checkIn: "09:12 AM", lateMinutes: 12 },
    { date: "2025-02-03", checkIn: "09:05 AM", lateMinutes: 5 },
    { date: "2025-02-04", checkIn: "08:55 AM", lateMinutes: 0 },
  ];

  return (
    <Layout>
      <h2 style={{ marginBottom: "20px" }}>Attendance Records</h2>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Check-In Time</th>
            <th>Late Minutes</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {attendanceData.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>
              <td>{record.checkIn}</td>
              <td>{record.lateMinutes}</td>
              <td>
                {record.lateMinutes > 0 ? (
                  <span style={styles.late}>Late</span>
                ) : (
                  <span style={styles.ontime}>On Time</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "white",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  late: {
    color: "red",
    fontWeight: "bold",
  },
  ontime: {
    color: "green",
    fontWeight: "bold",
  },
};

export default Attendance;

