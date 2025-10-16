import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login", { replace: true });
    } catch (err) {
      alert("Logout failed: " + (err?.message ?? "unknown error"));
    }
  };

  return (
    <nav className="navbar">
  <Link to="/" className="navbar-logo">DEV@Deakin</Link>
  <input type="text" placeholder="Search..." className="navbar-search" />
  <div className="navbar-links">
    <span className="cursor-pointer">Post</span>
    {!currentUser ? (
      <>
        <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>Login</NavLink>
        <NavLink to="/register" className={({ isActive }) => (isActive ? "active" : "")}>Register</NavLink>
      </>
    ) : (
      <>
        <span>{currentUser.email}</span>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </>
    )}
  </div>
</nav>
  );
}
