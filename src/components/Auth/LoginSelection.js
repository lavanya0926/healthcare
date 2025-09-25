
import { Link } from 'react-router-dom';
import './Selection.css';
import Header from '../Header';
import Footer from '../Footer';

const LoginSelection = () => {
  return (
    <div className="page-wrapper">
      <header className="header">
        <Header/>
        <h1>Welcome to Health Portal</h1>
      </header>

      <main className="selection-container">
        <h2>Login As</h2>
        <div className="selection-cards">
          <Link to="/login?role=patient" className="card">
             <img src="https://tse3.mm.bing.net/th/id/OIP.m8nLaWWFcpDvp5IH70lCJQAAAA?w=184&h=183&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="Patient" className="role-image" /> 
            <span>Patient</span>
          </Link>
          <Link to="/login?role=doctor" className="card">
            <img src="https://tse1.mm.bing.net/th/id/OIP.OXEtjf6lS75HnNETzlPd7wHaJ1?w=161&h=215&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Doctor" className="role-image" /> 
            <span>Doctor</span>
          </Link>
        </div>
      </main>
       
      <footer className="footer">
        <p>&copy; 2025 Health Portal. All rights reserved.</p>
      </footer>
     
    </div>
  );
};

export default LoginSelection;
