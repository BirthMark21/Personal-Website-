import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaTelegram } from 'react-icons/fa';
import './Footer.css';  // Assuming you have a separate CSS file for Footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Misganaw M | All Rights Reserved</p>
      <p>
        <a href="https://misganawm.vercel.app" target="_blank" rel="noopener noreferrer">
          Misganaw M 2025
        </a>
      </p>
      <div className="social-media-links">
        {/* Facebook */}
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
        
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/misganawm" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>

        {/* Instagram */}
        <a href="https://www.instagram.com/misganaw_318" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>

        {/* GitHub */}
        <a href="https://github.com/BirthMark21" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>

        {/* Telegram */}
        <a href="https://t.me/OEymis21" target="_blank" rel="noopener noreferrer">
          <FaTelegram size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
