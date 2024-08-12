import React from 'react';
import './AdminUserManagement.css';
import AdminSidebar from '../../components/adminComponents/AdminSidebar';
import AdminNavbar from '../../components/adminComponents/AdminNavbar';
import UserManagementList from '../../components/adminComponents/UserManagementList';


const AdminUserManagement = () => {
  return (
    <main>
      <AdminSidebar/>
      <AdminNavbar/>
      <UserManagementList/>
    </main>
  );
};

export default AdminUserManagement;
