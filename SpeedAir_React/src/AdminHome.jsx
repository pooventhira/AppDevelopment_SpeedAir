import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './AdminHome.css';
import AdminDashboard from './pages/adminPages/AdminDashboard';
import AdminOrdersManagement from './pages/adminPages/AdminOrdersManagement';
import AdminShipmentTracking from './pages/adminPages/AdminShipmentTracking';
import AdminInventoryManagement from './pages/adminPages/AdminInventoryManagement';
import AdminFleetManagement from './pages/adminPages/AdminFleetManagement';
import AdminSupplierManagement from './pages/adminPages/AdminSupplierManagement';
import AdminUserManagement from './pages/adminPages/AdminUserManagement';
import AdminBillingInvoicing from './pages/adminPages/AdminBillingInvoicing';

const AdminHome = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AdminDashboard/>}/>
          <Route path="/order-management" element={<AdminOrdersManagement/>}/>
          <Route path="/shipment-tracking" element={<AdminShipmentTracking/>}/>
          <Route path="/inventry-management" element={<AdminInventoryManagement/>}/>
          <Route path="/fleet-management" element={<AdminFleetManagement/>}/>
          <Route path="/suplier-management" element={<AdminSupplierManagement/>}/>
          <Route path="/user-management" element={<AdminUserManagement/>}/>
          <Route path="/billing-invoice" element={<AdminBillingInvoicing/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default AdminHome;
