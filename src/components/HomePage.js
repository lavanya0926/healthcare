

import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';
import Header from './Header';
import { useEffect, useState } from 'react';
import About from './About';
import ContactUs from './ContactUs';
import Footer from './Footer';

const HomePage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    alert('You have been logged out.');
    navigate('/login-selection');
  };

  return (
    <div className="home-container">
      <Header />
      <section className="hero-section">
        <h1>Welcome to HealthConnect</h1>
        <p>Your trusted platform for booking healthcare appointments</p>
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.f5-Ko3TecZhq2tTC9nsgigHaEJ?w=314&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt="Healthcare Hero"
          className="hero-image"
        />

        {currentUser ? (

          <div className="user-actions">
            <span className="username">{currentUser.name}</span>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>

        ) : (
          <>

            <div className="auth-buttons">
              <Link to="/login-selection" className="btn login-btn">Login</Link>
              <Link to="/register-selection" className="btn register-btn">Register</Link>
            </div>


          </>
        )}

      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.A7NbhcSubUgzESBGL1aiUwHaGc?w=214&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="Book Appointments"
            className="feature-image"
          />
          <h3>Book Appointments</h3>
          <p>Schedule consultations with top doctors in just a few clicks.</p>
        </div>
        <div className="feature-card">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.FcvHRtRrj6gr6TYOMKAT4QHaCm?w=277&h=123&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="Manage Availability"
            className="feature-image"
          />
          <h3>Manage Availability</h3>
          <p>Doctors can update their availability in real-time.</p>
        </div>
        <div className="feature-card">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.haHtKX9vxRf-_vp_lGMAaQAAAA?w=259&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="Track Medical History"
            className="feature-image"
          />
          <h3>Track Medical History</h3>
          <p>Patients can view and update their health records securely.</p>
        </div>
      </section>

      <About />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
