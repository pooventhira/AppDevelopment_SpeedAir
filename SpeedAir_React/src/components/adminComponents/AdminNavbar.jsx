import React from 'react';
import { FaBell, FaComments, FaUserCircle } from 'react-icons/fa';
import '../../assets/styles/adminStyles/AdminNavbar.css';

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <div className="icon"><FaBell /></div>
      <div className="icon"><FaComments /></div>
      <div className="icon"><FaUserCircle /></div>
    </nav>
  );
};

export default AdminNavbar;