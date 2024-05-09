// components/AdminSidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css'; // Import CSS file for styling

function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h3>Admin Panel</h3>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/admin" className="sidebar-link">User Kyc Requests</Link>
        </li>
        <li>
          <Link to="/admin/users" className="sidebar-link">Property Registration Requests</Link>
        </li>
        <li>
          <Link to="/admin/settings" className="sidebar-link">Admin Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
