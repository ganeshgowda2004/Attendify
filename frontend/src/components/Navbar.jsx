import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div style={styles.navbar}>
      <h2>Attendify</h2>

      <div style={styles.profileSection}>
        <div
          style={styles.profileCircle}
          onClick={() => setOpen(!open)}
        >
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        {open && (
          <div style={styles.dropdown}>
            <p><strong>{user?.name}</strong></p>
            <p>{user?.employeeId}</p>
            <hr />
            <p style={styles.link}>Preferences</p>
            <p style={styles.link}>Change Password</p>
            <p style={styles.logout} onClick={handleLogout}>
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    height: "60px",
    backgroundColor: "#1e293b",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  profileSection: {
    position: "relative",
  },
  profileCircle: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#2563eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "18px",
  },
  dropdown: {
    position: "absolute",
    top: "50px",
    right: "0",
    backgroundColor: "white",
    color: "black",
    padding: "15px",
    borderRadius: "8px",
    width: "200px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  link: {
    cursor: "pointer",
    padding: "5px 0",
  },
  logout: {
    cursor: "pointer",
    padding: "5px 0",
    color: "red",
  },
};

export default Navbar;
