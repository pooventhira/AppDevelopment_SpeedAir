import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginSignup from './Login';

import Support from './pages/mainPages/Support';
import Home from './pages/mainPages/Home';
import ForEnterprise from './pages/mainPages/ForEnterprise';
import Estimate from './pages/mainPages/Estimate';

import AdminDashboard from './pages/adminPages/AdminDashboard';
import AdminOrdersManagement from './pages/adminPages/AdminOrdersManagement';
import AdminShipmentTracking from './pages/adminPages/AdminShipmentTracking';
import AdminInventoryManagement from './pages/adminPages/AdminInventoryManagement';
import AdminFleetManagement from './pages/adminPages/AdminFleetManagement';
import AdminSupplierManagement from './pages/adminPages/AdminSupplierManagement';
import AdminEmployeeManagement from './pages/adminPages/AdminEmployeeManagement';
import AdminBillingInvoicing from './pages/adminPages/AdminBillingInvoicing';

const App = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    const storedUserType = localStorage.getItem('userType');
  
    if (token && storedUserType) {
      setIsAuthenticated(true);
      setUserType(storedUserType);
    } else {
      navigate('/login');
    }
  }, [navigate]);
  

  if (!isAuthenticated) {
    return <LoginSignup />;
  }

  if (userType === 'user') {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ForEnterprise" element={<ForEnterprise />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Estimate" element={<Estimate />}/>
      </Routes> 
    );
  } else {
    return(
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/order-management" element={<AdminOrdersManagement />} />
        <Route path="/admin/shipment-tracking" element={<AdminShipmentTracking />} />
        <Route path="/admin/inventory-management" element={<AdminInventoryManagement />} />
        <Route path="/admin/fleet-management" element={<AdminFleetManagement />} />
        <Route path="/admin/supplier-management" element={<AdminSupplierManagement />} />
        <Route path="/admin/employee-management" element={<AdminEmployeeManagement />} />
        <Route path="/admin/billing-invoice" element={<AdminBillingInvoicing />} />
      </Routes>
    )
  }
};

export default App;
