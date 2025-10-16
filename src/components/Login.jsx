import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Login to your account</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <div>
          <label>Your email</label>
          <input
            type="email"
            className="form-input"
            value={email}
            placeholder="Ex: abc@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <br /><br />

        <div className="form-group">
          <label>Your password</label>
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          className="login_button"
        >
          Login
        </button>
      </form>

      <p >
        <Link to="/register" className="Sign_up_button">
          Sign up
        </Link>
      </p>

      {error && <p className="red">{error}</p>}
    </div>
  );
}
