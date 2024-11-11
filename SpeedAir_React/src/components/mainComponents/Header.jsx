import React from 'react';
import '../../assets/styles/mainStyles/Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const home = () => {
    navigate('/')
  }
  const forEnterprise = () => {
    navigate('/ForEnterprise')
  }
  const support = () => {
    navigate('/Support')
  }
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userType');
    navigate('/login');
    window.location.reload();
  };
  return (
      <header>
        <nav>
          <p className='nav-logo' onClick={home}>Speed<span>Air</span></p>
          <div className="nav-menu">
            <p onClick={forEnterprise}>For Enterprise</p>
            <p onClick={support}>Support</p>
          </div>
          <i className='fa-solid fa-user' onClick={handleLogout}></i>
        </nav>
      </header>
  );
};

export default Header;
