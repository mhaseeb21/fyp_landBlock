// components/AdminSidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Admin Dashboard</Link></li>
        <li><Link to="/users">Admin Users</Link></li>
        <li><Link to="/settings">Admin Settings</Link></li>
      </ul>
    </div>
  );
}

export default AdminSidebar;