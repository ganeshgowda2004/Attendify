import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Prevent duplicate email
    const existingUser = users.find(
      (user) => user.email === formData.email
    );

    if (existingUser) {
      alert("User already registered with this email");
      return;
    }

    const newEmployeeId =
      "EMP2025" + String(users.length + 1).padStart(3, "0");

    const newUser = {
      ...formData,
      employeeId: newEmployeeId
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert(
      `Registration Successful!\nYour Employee ID is: ${newEmployeeId}`
    );

    navigate("/");
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleRegister}>
        <h2>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="date"
          name="dob"
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Create Password"
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Register
        </button>

        <p style={{ textAlign: "center" }}>
          Already have account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f5f9"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "10px",
    width: "320px"
  },
  input: {
    padding: "10px"
  },
  button: {
    padding: "10px",
    backgroundColor: "#16a34a",
    color: "white",
    border: "none"
  }
};

export default Register;
