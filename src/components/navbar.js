// src/components/Navbar.js

export default function Navbar({ toggleSidebar, username = "User" }) {
  return (
    <nav className="navbar">
      <button onClick={toggleSidebar} className="toggle-btn">
        <i className="fas fa-bars"></i>
      </button>
      <h2>Welcome, {username}!</h2>
    </nav>
  );
}

  