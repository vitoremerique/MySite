import React, { useEffect, useState } from 'react';
import './Header.css';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled || open ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#introduction" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-prompt">~/</span>emerique
          <span className="logo-cursor" aria-hidden="true" />
        </a>

        <button
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav ${open ? 'is-open' : ''}`}>
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              <span className="nav-index">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
