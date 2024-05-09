// components/AdminNavbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { PersonCircle, BoxArrowRight } from 'react-bootstrap-icons'; // Import Bootstrap icons
import './AdminNavbar.css'; // Import CSS file for styling

function AdminNavbar() {
  return (
    <div className="admin-navbar">
      <h1>Admin Panel</h1>
      <div className="navbar-right">
        <Link to="/admin/profile" className="profile-link">
          <PersonCircle size={24} className="profile-icon" />
        </Link>
        <button className="logout-button">
          <BoxArrowRight size={24} />
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminNavbar;
