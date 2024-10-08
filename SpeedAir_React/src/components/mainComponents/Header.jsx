import React from 'react';
import {Link} from 'react-router-dom';
import '../../assets/styles/mainStyles/Header.css';

const Header = () => {
  return (
      <header>
        <nav>
          <Link className='nav-logo' to="/">Speed<span>Air</span></Link>
          <div className="nav-menu">
            <Link to="/ForEnterprise">For Enterprise</Link>
            <Link to="/Support">Support</Link>
          </div>
          <i className='fa-solid fa-user'></i>
        </nav>
      </header>
  );
};

export default Header;
