import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo - Centered */}
          <div className="logo">
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + '/Img/LOGO-Main-TSB.png'}
                alt="Skyblessing Films"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Below Logo */}
          <nav className="desktop-nav">
            <ul>
              <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
              <li><Link to="/gallery" onClick={closeMobileMenu}>Galleries</Link></li>
              <li><Link to="/stories" onClick={closeMobileMenu}>Stories</Link></li>
              <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
              <li><Link to="/enquires" onClick={closeMobileMenu}>Enquires</Link></li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav">
          <ul>
            <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
            <li><Link to="/gallery" onClick={closeMobileMenu}>Galleries</Link></li>
            <li><Link to="/stories" onClick={closeMobileMenu}>Stories</Link></li>
            <li><Link to="/about" onClick={closeMobileMenu}>About Us</Link></li>
            <li><Link to="/enquires" onClick={closeMobileMenu}>Enquires</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header; 