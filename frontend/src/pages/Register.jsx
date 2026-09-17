
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!role) {
      alert("Please select a role");
      return;
    }

    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Role:", role);

    alert("Registration successful!");

    navigate("/login");
  };

  return (
    <div>

      <h1>Columbus Family</h1>

      <h2>Create Account</h2>

      <form onSubmit={handleRegister}>

        {/* Username */}

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

        {/* Password */}

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

        {/* Confirm Password */}

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

        {/* Role */}

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

            <option value="student">
              Student
            </option>

            <option value="woman">
              Woman
            </option>

            <option value="tutor">
              Tutor
            </option>

            <option value="volunteer">
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

