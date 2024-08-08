import React from 'react';
import '../../assets/styles/mainStyles/Header1.css';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
      <header>
        <nav>
          <Link className='nav-logo' to="/">Speed<span>Air</span></Link>
        </nav>
      </header>
  );
};

export default Header;