import React from 'react';
import './AdminDashboard.css';
import AdminSidebar from '../../components/adminComponents/AdminSidebar';
import AdminNavbar from '../../components/adminComponents/AdminNavbar';

const AdminDashboard = () => {
  return (
    <main>
      <AdminSidebar/>
      <AdminNavbar/>
    </main>
  );
};

export default AdminDashboard;
