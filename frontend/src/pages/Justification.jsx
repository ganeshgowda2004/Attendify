import { useState } from "react";
import Layout from "../components/Layout";

function Justification() {
  const [reason, setReason] = useState("");
  const [requests, setRequests] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!reason) {
      alert("Please enter justification reason");
      return;
    }

    const newRequest = {
      date: new Date().toLocaleDateString(),
      reason,
      status: "Pending",
    };

    setRequests([...requests, newRequest]);
    setReason("");
  };

  return (
    <Layout>
      <h2 style={{ marginBottom: "20px" }}>Submit Justification</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <textarea
          placeholder="Enter your reason for late arrival..."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>

      <h3 style={{ marginTop: "30px" }}>Previous Requests</h3>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((req, index) => (
            <tr key={index}>
              <td>{req.date}</td>
              <td>{req.reason}</td>
              <td>
                <span style={styles.pending}>{req.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "500px",
  },
  textarea: {
    height: "80px",
    padding: "10px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    marginTop: "10px",
    backgroundColor: "white",
    borderCollapse: "collapse",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  pending: {
    color: "orange",
    fontWeight: "bold",
  },
};

export default Justification;
