
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);

    // For now, pretend login is successful
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Columbus Family</h1>

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

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

        <button type="submit">
          Login
        </button>

      </form>

      <br />

      <p>
        Don't have an account?
      </p>

      <button onClick={() => navigate("/register")}>
        Register
      </button>

    </div>
  );
}

export default Login;

