import React from 'react';
import AdminSidebar from '../admin_comp/AdminSidebar';
import AdminNavbar from '../admin_comp/AdminNavbar';
function AdminDashboard() {
  return (

    <div>
          <AdminNavbar />
          <AdminSidebar/>
      <h2>Admin Dashboard</h2>
      <p>Welcome to the Admin Dashboard page!</p>
    </div>
  );
}

export default AdminDashboard;