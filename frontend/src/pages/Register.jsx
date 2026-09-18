
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!role) {
      alert("Please select a role");
      return;
    }

    // Tutors need at least one subject
    const subjects = role === "TUTOR" ? ["DSA"] : [];

    try {
      const response = await api.post("/api/auth/register", {
        username,
        password,
        role,
        subjects,
      });

      console.log("Register response:", response.data);

      alert("Registration successful!");

      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);

      alert(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  };

  return (
    <div>
      <h1>Columbus Family</h1>

      <h2>Create Account</h2>

      <form onSubmit={handleRegister}>
        <div>
          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Confirm Password</label>

          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Select Role</label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">
              -- Select Role --
            </option>

            <option value="STUDENT">
              Student
            </option>

            <option value="WOMAN">
              Woman
            </option>

            <option value="TUTOR">
              Tutor
            </option>

            <option value="VOLUNTEER">
              Volunteer
            </option>
          </select>
        </div>

        <br />

        <button type="submit">
          Register
        </button>
      </form>

      <br />

      <button onClick={() => navigate("/login")}>
        Back to Login
      </button>
    </div>
  );
}

export default Register;

