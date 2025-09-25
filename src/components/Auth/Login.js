// components/Auth/Login.js
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Auth.css';
import Header from '../Header';
import SpecializationSelector from './SpecializationSelector';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const loginRole = params.get('role') || 'patient';

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('healthconnectUsers')) || [];
    const matchedUser = users.find(
      user =>
        user.email === email &&
        user.password === password &&
        user.role === loginRole &&
        (loginRole !== 'doctor' || user.specialization === specialization)
    );

    if (matchedUser) {
      alert(`Welcome back, ${matchedUser.name}!`);
      localStorage.setItem('currentUser', JSON.stringify(matchedUser));
      if (matchedUser.role === 'doctor') {
        navigate(`/doctor-dashboard`);
      } else {
        navigate('/specializations');
      }
    } else {
      alert('Invalid email, password, role, or specialization');
    }
  };

  return (
    <div className="auth-container">
      <Header />
      <h2>Login to HealthConnect</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        {loginRole === 'doctor' && (
          <SpecializationSelector value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
        )}
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <span className="auth-link" onClick={() => navigate(`/register?role=${loginRole}`)}>
          Register here
        </span>
      </p>
     
    </div>
  );
};

export default Login;

        