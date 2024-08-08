import React from 'react';
import { FaHome, FaShippingFast, FaTruck, FaUsers, FaChartBar, FaFileInvoiceDollar, FaCogs, FaQuestionCircle, FaClipboardList, FaWarehouse, FaBuilding, FaUserShield } from 'react-icons/fa';
import '../../assets/styles/adminStyles/AdminSidebar.css';

const AdminSidebar = ({ setActiveComponent }) => {
  return (
    <div className="sidebar">
      <div className="logo">Speed<span>Air</span></div>
      <div className="menu-item" onClick={() => setActiveComponent('Dashboard')}>
        <FaHome />
        <span>Dashboard</span>
      </div>
      <div className="menu-item" onClick={() => setActiveComponent('OrdersManagement')}>
        <FaClipboardList />
        <span>Orders Management</span>
      </div>
      <div className="menu-item" onClick={() => setActiveComponent('ShipmentTracking')}>
        <FaShippingFast />
        <span>Shipment Tracking</span>
      </div>
      <div className="menu-item" onClick={() => setActiveComponent('InventoryManagement')}>
        <FaWarehouse />
        <span>Inventory Management</span>
      </div>
      <div className="menu-item" onClick={() => setActiveComponent('FleetManagement')}>
        <FaTruck />
        <span>Fleet Management</span>
      </div>
      <div className="menu-item" onClick={() => setActiveComponent('CustomerManagement')}>
        <FaUsers />
        <span>Customer Management</span>
      </div>
      <div className="menu-item" onClick={() => setActiveComponent('SupplierManagement')}>
        <FaBuilding />
        <span>Supplier Management</span>
      </div>
      <div className="menu-item" onClick={() => setActiveComponent('ReportsAnalytics')}>
        <FaChartBar />
        <span>Reports & Analytics</span>
      </div>
      <div className="menu-item" onClick={() => setActiveComponent('BillingInvoicing')}>
        <FaFileInvoiceDollar />
        <span>Billing & Invoicing</span>
      </div>
      <div className="menu-item" onClick={() => setActiveComponent('UserManagement')}>
        <FaUserShield />
        <span>User Management</span>
      </div>
      <div className="menu-item" onClick={() => setActiveComponent('Settings')}>
        <FaCogs />
        <span>Settings</span>
      </div>
      <div className="menu-item" onClick={() => setActiveComponent('SupportDocumentation')}>
        <FaQuestionCircle />
        <span>Support & Documentation</span>
      </div>
    </div>
  );
};

export default AdminSidebar;
