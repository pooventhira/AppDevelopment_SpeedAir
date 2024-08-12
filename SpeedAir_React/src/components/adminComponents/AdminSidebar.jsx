import React from 'react';
import { FaBuilding, FaClipboardList, FaFileInvoiceDollar, FaHome, FaShippingFast, FaTruck, FaUserShield, FaWarehouse } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/adminStyles/AdminSidebar.css';

const AdminSidebar = () => {

  const navigate = useNavigate();
  const adminDashboard = () => {
    navigate('/');
  }
  const adminOrderManagement = () => {
    navigate('/order-management');
  }
  const adminShipmentTracking = () => {
    navigate('/shipment-tracking');
  }
  const adminInventoryManagement = () => {
    navigate('/inventry-management');
  }
  const adminFleetManagement = () => {
    navigate('/fleet-management');
  }
  const adminSupplierManagement = () => {
    navigate('/suplier-management');
  }
  const adminUserManagement = () => {
    navigate('/user-management');
  }
  const adminBillingInvoicing = () => {
    navigate('/billing-invoice');
  }

  return (
    <div className="sidebar">
      <div className="logo">Speed<span>Air</span></div>
      <div className="menu-item" onClick={adminDashboard}>
        <FaHome />
        <span>Dashboard</span>
      </div>
      <div className="menu-item" onClick={adminOrderManagement}>
        <FaClipboardList />
        <span>Orders Management</span>
      </div>
      <div className="menu-item" onClick={adminShipmentTracking}>
        <FaShippingFast />
        <span>Shipment Tracking</span>
      </div>
      <div className="menu-item" onClick={adminInventoryManagement}>
        <FaWarehouse />
        <span>Inventory Management</span>
      </div>
      <div className="menu-item" onClick={adminFleetManagement}>
        <FaTruck />
        <span>Fleet Management</span>
      </div>
      <div className="menu-item" onClick={adminSupplierManagement}>
        <FaBuilding />
        <span>Supplier Management</span>
      </div>
      <div className="menu-item" onClick={adminBillingInvoicing}>
        <FaFileInvoiceDollar />
        <span>Billing & Invoicing</span>
      </div>
      <div className="menu-item" onClick={adminUserManagement}>
        <FaUserShield />
        <span>User Management</span>
      </div>
    </div>
  );
};

export default AdminSidebar;
