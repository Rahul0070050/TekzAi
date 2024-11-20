import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/TEKZAI-LOGO-WW-1.2.png';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className={`navbar-content ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo" onClick={() => navigate('/')}>
          <img src={logo} loading="lazy" alt="Company Logo" />
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          {isMenuOpen && (
            <span className="close-button" onClick={toggleMenu}>&times;</span>
          )}
          <li><a href="#" onClick={() => { navigate('/'); setIsMenuOpen(false); }}>Home</a></li>
          <li><a href="#" onClick={() => { navigate('/about'); setIsMenuOpen(false); }}>About</a></li>
          <li><a href="#" onClick={() => { navigate('/services'); setIsMenuOpen(false); }}>Services</a></li>
          <li><a href="#" onClick={() => { navigate('/products'); setIsMenuOpen(false); }}>Products</a></li>
          <li><a href="#" onClick={() => { navigate('/contact'); setIsMenuOpen(false); }}>Contact</a></li>
          
          {/* Social Media Links */}
          {isMenuOpen && (
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          )}
        </ul>

        {/* Contact Icons */}
        <div className="contact-icons">
          <a href="tel:+1234567890" className="contact-item"><FaPhoneAlt className="phone" />+91 9400480459 | </a>
          <a href="mailto:info@tekzai.com" className="contact-item"><FaEnvelope className="envelope" />tekzaiaws@gmail.com</a>
        </div>

        {/* Hamburger Menu */}
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
