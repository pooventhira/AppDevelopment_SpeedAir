import React from 'react';
import './AdminDashboard.css';
import AdminSidebar from '../../components/adminComponents/AdminSidebar';
import AdminNavbar from '../../components/adminComponents/AdminNavbar';
import DashboardCards from '../../components/adminComponents/DashboardCards';
import DashboardVehiclesOverview from '../../components/adminComponents/DashboardVehicleOverview';

const AdminDashboard = () => {
  return (
    <main>
      <AdminSidebar/>
      <AdminNavbar/>
      <DashboardCards/>
      <DashboardVehiclesOverview/>
    </main>
  );
};

export default AdminDashboard;
