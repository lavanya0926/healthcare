// src/pages/ContactUs.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  return (
    <section
      id="ContactUs"
      className="container py-5"
      style={{
        backgroundColor: '#e6f2ff',
        borderTop: '1px solid #ddd',
        borderRadius: '10px',
        margin: '40px auto',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
         maxWidth: '1400px' 
      }}
    >
      <h2 className="text-center mb-4" style={{ fontSize: '2rem', color: '#2c3e50' }}>
        📞 Contact Us
      </h2>
      <p className="text-center mb-5">
        We’re here to help you with appointments, medical inquiries, and general support. Reach out to us anytime.
      </p>

      <div className="row gx-5 gy-4">
        {/* Phone Numbers */}
        <div className="col-md-6">
          <div className="p-4 h-100" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
            <h3 style={{ color: '#34495e', marginBottom: '10px' }}>📱 Phone Numbers</h3>
            <ul className="list-unstyled">
              <li style={{ marginBottom: '10px', fontSize: '1rem' }}>
                <strong>General Inquiries:</strong> +91 8778545490
              </li>
              <li style={{ marginBottom: '10px', fontSize: '1rem' }}>
                <strong>Emergency Services (24/7):</strong> +91 7989941562
              </li>
              <li style={{ marginBottom: '10px', fontSize: '1rem' }}>
                <strong>Appointment Desk:</strong> +91 9390613167
              </li>
            </ul>
          </div>
        </div>

        {/* Email Addresses */}
        <div className="col-md-6">
          <div className="p-4 h-100" style={{ backgroundColor: 'white', borderRadius: '10px' }}>
            <h3 style={{ color: '#34495e', marginBottom: '10px' }}>📧 Email</h3>
            <ul className="list-unstyled">
              <li style={{ marginBottom: '10px', fontSize: '1rem' }}>
                <strong>Appointments:</strong>{' '}
                <a href="mailto:appointments@cmchospital.in">appointments@cmchospital.in</a>
              </li>
              <li style={{ marginBottom: '10px', fontSize: '1rem' }}>
                <strong>Support & Feedback:</strong>{' '}
                <a href="mailto:support@cmchospital.in">support@cmchospital.in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
