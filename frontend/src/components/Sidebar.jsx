import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/attendance">Attendance</Link>
      <Link to="/wallet">Wallet</Link>
      <Link to="/justification">Justification</Link>
      <Link to="/admin">Admin Panel</Link>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    height: "100vh",
    backgroundColor: "#334155",
    color: "white",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    gap: "15px"
  }
};

export default Sidebar;
