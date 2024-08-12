import React from 'react';
import './AdminInventoryManagement.css';
import AdminSidebar from '../../components/adminComponents/AdminSidebar';
import AdminNavbar from '../../components/adminComponents/AdminNavbar';
import InventoryManagementList from '../../components/adminComponents/InventoryManagementList';

const AdminInventoryManagement = () => {
  return (
    <main>
      <AdminSidebar/>
      <AdminNavbar/>
      <InventoryManagementList/>
    </main>
  );
};

export default AdminInventoryManagement;
