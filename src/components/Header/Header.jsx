import React from 'react';
import './Header.css';
import Logo from '../../assets/Icons/logo.png'; // Assuming you have a logo image

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo">
          {Logo && <img src={Logo} alt="Logo" className="logo-image" />}
          <span className="logo-text">Inventorying and counting</span>
        </div>
      </div>

      <div className="search-section">
        <input type="text" placeholder="Buscar..." className="search-input" />
      </div>

      <div className="right-section">
        <div className="profile">
          <span className="avatar">👤</span>
          <span className="username">*Usuario aqui*</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

