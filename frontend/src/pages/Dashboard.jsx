import Layout from "../components/Layout";

function Dashboard() {
  // Temporary dummy data
  const totalDays = 22;
  const lateUsed = 18;
  const monthlyLimit = 45;
  const remaining = monthlyLimit - lateUsed;

  return (
    <Layout>
      <h2 style={{ marginBottom: "20px" }}>Dashboard</h2>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3>Total Attendance</h3>
          <p>{totalDays} Days</p>
        </div>

        <div style={styles.card}>
          <h3>Late Minutes Used</h3>
          <p>{lateUsed} Minutes</p>
        </div>

        <div style={styles.card}>
          <h3>Remaining Wallet</h3>
          <p>{remaining} Minutes</p>
        </div>
      </div>

      {remaining <= 10 && (
        <div style={styles.warning}>
          ⚠ Warning: You are nearing your late-time limit!
        </div>
      )}
    </Layout>
  );
}

const styles = {
  cardContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    flex: "1",
    minWidth: "200px",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  warning: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#fee2e2",
    color: "#b91c1c",
    borderRadius: "8px",
  },
};

export default Dashboard;
