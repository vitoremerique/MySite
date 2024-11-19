import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">{`</>`}</div>
      {/* Ícone do menu mobile */}
      <div className="menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✖' : '☰'}
      </div>
      <nav className={`nav ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        <a href="#introduction" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Me</a>
        <a href="#scientific" onClick={() => setIsMobileMenuOpen(false)}>Scientific Initiation</a>
        <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;
