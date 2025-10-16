import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { signup } = useAuth();
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, name); // Update auth context to support name
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-container">
  <h2 className="form-title">Create a DEV@Deakin Account</h2>
  {error && <p className="error-text">{error}</p>}
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <input type="text" className="form-input" placeholder="Name*" value={name} onChange={(e) => setName(e.target.value)} required />
    </div>
    <div className="form-group">
      <input type="email" className="form-input" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} required />
    </div>
    <div className="form-group">
      <input type="password" className="form-input" placeholder="Password*" value={password} onChange={(e) => setPassword(e.target.value)} required />
    </div>
    <div className="form-group">
      <input type="password" className="form-input" placeholder="Confirm password*" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
    </div>
    <button type="submit" disabled={loading} className="form-button">Create!</button>
  </form>
</div>

  );
}
