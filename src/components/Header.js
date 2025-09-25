
// import { Link, useNavigate } from "react-router-dom";
// import './Header.css';
// import { useEffect, useState } from "react";


// const Header = () => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const navigate = useNavigate();


// const handleUserClick = () => {
//   if (currentUser?.role === "patient") {
//     navigate("/patient-dashboard");
//   } else if (currentUser?.role === "doctor") {
//     navigate("/doctor-dashboard");
//   } else {
//     alert("Unknown role or access denied.");
//   }
// };


//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('currentUser'));
//     if (storedUser) {
//       setCurrentUser(storedUser);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('currentUser');
//     alert('You have been logged out.');
//     navigate('/');
//   };

//   return (
//     <header className="main-header">
//       <div className="nav-logo">🏥 HealthConnect</div>
      
//       <nav className="main-nav">
//         <ul className="nav-menu">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/Specializations">Specializations</Link></li>
//           <li><a href="#About">About</a></li>

//           {currentUser ? (
//             <li className="header-user-actions">
             
//                <span className="header-user-icon" title={currentUser.name} onClick={() => handleUserClick()}><img className="image" src='https://tse4.mm.bing.net/th/id/OIP.zi4Xf-NhgVgITYi_UTApDAHaHa?w=128&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3'></img></span>

//               <button className="header-logout-button" onClick={handleLogout}>Logout</button>
//             </li>

//           ) : (
//             <>
//               <li><Link to="/login-selection">Login</Link></li>
//               <li><Link to="/register-selection">Register</Link></li>
//             </>
//           )}

//           <li><a href="#ContactUs">Contact Us</a></li>
//         </ul>
//       </nav>
      
//     </header>
//   );
// };

// export default Header;


// import { Link, useNavigate } from "react-router-dom";
// import './Header.css';
// import { useEffect, useState } from "react";

// const Header = () => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const navigate = useNavigate();

//   const handleUserClick = () => {
//     if (currentUser?.role === "patient") {
//       navigate("/patient-dashboard");
//     } else if (currentUser?.role === "doctor") {
//       navigate("/doctor-dashboard");
//     } else {
//       alert("Unknown role or access denied.");
//     }
//   };

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('currentUser'));
//     if (storedUser) {
//       setCurrentUser(storedUser);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('currentUser');
//     alert('You have been logged out.');
//     navigate('/');
//   };

//   return (
//     <header className="main-header">
//       <div className="nav-logo">🏥 HealthConnect</div>

//       <nav className="main-nav">
//         <ul className="nav-menu">
//           <li><Link to="/">Home</Link></li>

//           {/* Hide Specializations link for doctors */}
//           {currentUser?.role !== 'doctor' && (
//             <li><Link to="/Specializations">Specializations</Link></li>
//           )}

//           <li><a href="#About">About</a></li>

//           {currentUser ? (
//             <li className="header-user-actions">
//               <span
//                 className="header-user-icon"
//                 title={currentUser.name}
//                 onClick={handleUserClick}
//               >
//                 <img
//                   className="image"
//                   src="https://tse4.mm.bing.net/th/id/OIP.zi4Xf-NhgVgITYi_UTApDAHaHa?w=128&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3"
//                   alt="User Icon"
//                 />
//               </span>
//               <button className="header-logout-button" onClick={handleLogout}>
//                 Logout
//               </button>
//             </li>
//           ) : (
//             <>
//               <li><Link to="/login-selection">Login</Link></li>
//               <li><Link to="/register-selection">Register</Link></li>
//             </>
//           )}

//           <li><a href="#ContactUs">Contact Us</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
// src/components/Header.js
import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import { useEffect, useState } from "react";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const handleUserClick = () => {
    if (currentUser?.role === "patient") {
      navigate("/patient-dashboard");
    } else if (currentUser?.role === "doctor") {
      navigate("/doctor-dashboard");
    } else {
      alert("Unknown role or access denied.");
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    alert('You have been logged out.');
    navigate('/');
  };

  return (
    <header className="main-header">
      <div className="nav-logo">🏥 HealthConnect</div>

      <nav className="main-nav">
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>

          {/* Hide Specializations link for doctors */}
          {currentUser?.role !== 'doctor' && (
            <li><Link to="/Specializations">Specializations</Link></li>
          )}

          <li><a href="#About">About</a></li>

          <li><a href="#ContactUs">Contact Us</a></li>

          {currentUser ? (
            <li>
              <div className="header-user-actions">
                <span
                  className="header-user-icon"
                  title={currentUser.name}
                  onClick={handleUserClick}
                >
                  <img
                    className="image"
                    src="https://tse4.mm.bing.net/th/id/OIP.zi4Xf-NhgVgITYi_UTApDAHaHa?w=128&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3"
                    alt="User Icon"
                  />
                </span>
                <button className="header-logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </li>
          ) : (
            <>
              <li><Link to="/login-selection">Login</Link></li>
              <li><Link to="/register-selection">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
