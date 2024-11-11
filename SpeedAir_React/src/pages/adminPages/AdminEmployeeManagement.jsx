import React from 'react';
import './AdminEmployeeManagement.css';
import AdminSidebar from '../../components/adminComponents/AdminSidebar';
import AdminNavbar from '../../components/adminComponents/AdminNavbar';
import EmployeeManagementList from '../../components/adminComponents/EmployeeManagementList';


const AdminEmployeeManagement = () => {
  return (
    <main>
      <AdminSidebar/>
      <AdminNavbar/>
      <EmployeeManagementList/>
    </main>
  );
};

export default AdminEmployeeManagement;
