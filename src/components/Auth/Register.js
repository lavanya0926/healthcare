import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Auth.css';
import Header from '../Header';
import SpecializationSelector from './SpecializationSelector';

const Register = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialRole = params.get('role') || 'patient';

  const [name, setName] = useState('');
  const [role] = useState(initialRole);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // ✅ Regex for name: only letters (spaces allowed)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      alert('Name must contain only letters and spaces.');
      return;
    }

    // ✅ Regex for password: minimum 8 characters
    const passwordRegex = /^.{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    const newUser = {
      name,
      role,
      email,
      password,
      specialization: role === 'doctor' ? specialization : ''
    };

    const existingUsers = JSON.parse(localStorage.getItem('healthconnectUsers')) || [];
    const emailExists = existingUsers.some(user => user.email === email);

    if (emailExists) {
      alert('Email already registered. Please login or use a different email.');
      return;
    }

    existingUsers.push(newUser);
    localStorage.setItem('healthconnectUsers', JSON.stringify(existingUsers));
    alert('Registration successful!');
    navigate(`/login?role=${role}`);
  };

  return (
    <div className="auth-container">
      <Header />
      <h2>Create Your HealthConnect Account</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {role === 'doctor' && (
          <SpecializationSelector
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{' '}
        <span className="auth-link" onClick={() => navigate(`/login?role=${role}`)}>
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
