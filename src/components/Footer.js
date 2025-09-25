// src/components/Footer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer
      className="text-center py-4 mt-5"
      style={{
        fontSize: '14px',
        fontWeight: '500',
        letterSpacing: '0.5px',
        backgroundColor: '#160f5e',
        color: 'white',
       
      }}
    >
      <p className="mb-0">© 2025 HealthConnect. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
