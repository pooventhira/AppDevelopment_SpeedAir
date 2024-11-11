import React from 'react';
import { FaBell, FaComments, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/adminStyles/AdminNavbar.css';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userType');
    navigate('/login');
    window.location.reload();
  };
  return (
    <nav className="admin-navbar">
      <div className="icon"><FaBell /></div>
      <div className="icon"><FaComments /></div>
      <div className="icon" onClick={handleLogout}><FaUserCircle /></div>
    </nav>
  );
};

export default AdminNavbar;