import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PatientDashboard from './components/Dashboard/PatientDashboard';
import LoginSelection from './components/Auth/LoginSelection';
import RegisterSelection from './components/Auth/RegisterSelection';
import Specializations from './components/Dashboard/Specializations';
import DoctorsList from './components/pages/DoctorsList';
import DoctorDashboard from './components/Dashboard/DoctorDashboard';
import Appointment from './components/pages/AppointmentPage';


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login-selection" element={<LoginSelection />} />
        <Route path="/register-selection" element={<RegisterSelection />} />
        <Route path="/specializations" element={<Specializations />} />
        <Route path="/doctors/:specialization" element={<DoctorsList />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/book/:doctorId/:mode" element={<Appointment />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
       
      </Routes>
    </Router>
  );
}

export default App;
