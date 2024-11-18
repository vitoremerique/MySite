import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">{`</>`}</div>
      <nav className="nav">
        <a href="#introduction">Home</a>
        <a href="#about">About Me</a>
        <a href="#scientific">Scientific Initiation</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
