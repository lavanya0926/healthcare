// src/pages/About.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <section
      id="About"
      className="container py-5"
      style={{
        backgroundColor: '#e6f2ff',
        margin: '40px auto',
        borderRadius: '10px',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
        color: '#2c3e50',
        maxWidth: '1400px' 
      }}
    >
      <h2 className="text-center mb-4" style={{ fontSize: '2.5rem', color: '#0072ff' }}>
        📘 About HealthConnect
      </h2>
      <p className="text-center mb-5" style={{ fontSize: '1.1rem' }}>
        HealthConnect is transforming how people access medical care in India. By combining technology with expert services,
        we make healthcare more convenient, secure, and accessible—anytime, anywhere.
      </p>

      <div className="row gx-5 gy-4">
        {/* Left Column */}
        <div className="col-md-6">
          <h3 style={{ fontSize: '1.4rem', color: '#160f5e', marginBottom: '15px' }}>🌐 Key Benefits</h3>
          <ul className="ms-4" style={{ listStyleType: 'disc' }}>
            <li className="mb-2">24/7 doctor consultations via chat, call, or video</li>
            <li className="mb-2">Online pharmacy with doorstep delivery</li>
            <li className="mb-2">Home-based diagnostic tests</li>
            <li className="mb-2">Secure digital vaults for medical records</li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          <h3 style={{ fontSize: '1.4rem', color: '#160f5e', marginBottom: '15px' }}>📱 The Future Is Digital</h3>
          <p>
            With platforms like HealthConnect, medical care is becoming smarter, faster, and more patient-focused.
            Our goal is to empower individuals with tools that simplify healthcare and improve outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
