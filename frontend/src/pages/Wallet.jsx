import Layout from "../components/Layout";

function Wallet() {
  // Dummy data for now
  const monthlyLimit = 45;
  const usedMinutes = 18;
  const remaining = monthlyLimit - usedMinutes;

  const percentageUsed = (usedMinutes / monthlyLimit) * 100;

  return (
    <Layout>
      <h2 style={{ marginBottom: "20px" }}>Late-Time Wallet</h2>

      <div style={styles.card}>
        <p><strong>Monthly Limit:</strong> {monthlyLimit} Minutes</p>
        <p><strong>Used:</strong> {usedMinutes} Minutes</p>
        <p><strong>Remaining:</strong> {remaining} Minutes</p>

        <div style={styles.progressBar}>
          <div
            style={{
              ...styles.progressFill,
              width: `${percentageUsed}%`,
              backgroundColor: percentageUsed > 80 ? "red" : "#2563eb",
            }}
          />
        </div>

        {percentageUsed > 80 && (
          <p style={styles.warning}>
            ⚠ You are close to exceeding your late-time limit!
          </p>
        )}
      </div>
    </Layout>
  );
}

const styles = {
  card: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "500px",
  },
  progressBar: {
    height: "20px",
    backgroundColor: "#e2e8f0",
    borderRadius: "10px",
    marginTop: "15px",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    transition: "0.3s ease",
  },
  warning: {
    marginTop: "15px",
    color: "red",
  },
};

export default Wallet;
