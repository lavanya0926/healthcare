
import { Component } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import doctors from '../data/DoctorData';
import './DoctorList.css'; 
import Header from '../Header';
import About from '../About';
import ContactUs from '../ContactUs';
import Footer from '../Footer';

const withParams = (Component) => {
  return (props) => {
    const params = useParams();
    const navigate = useNavigate();
    return <Component {...props} params={params} navigate={navigate} />;
  };
};

class DoctorList extends Component {
  getMatchingSpecialty = (specialization) => {
    const map = {
      cardiology: 'Cardiologist',
      dermatology: 'Dermatologist',
      orthopedics: 'Orthopedic Surgeon',
      pediatrics: 'Pediatrician',
      neurology: 'Neurologist',
      dentist: 'Dentist'
    };
    return map[specialization.toLowerCase()] || specialization;
  };

  handleBooking = (doctor, mode) => {
    const { navigate } = this.props;
    navigate(`/book/${doctor.id}/${mode.toLowerCase()}`);
  };

  render() {
    const { specialization } = this.props.params;
    const specialty = this.getMatchingSpecialty(specialization);

    const filteredDoctors = doctors.filter(
      (doc) => doc.specialty.toLowerCase() === specialty.toLowerCase()
    );

    return (
      <div className="doctor-list-container">
        <Header/>
        <h1 className="page-title">Doctors in {specialization.charAt(0).toUpperCase() + specialization.slice(1)}</h1>
        {filteredDoctors.length > 0 ? (
          <ul className="doctor-list">
            {filteredDoctors.map((doc) => (
              <li key={doc.id} className="doctor-card">
                <img src={doc.picture} alt={doc.name} className="doctor-image" />
                <div className="doctor-details">
                  <h3>{doc.name}</h3>
                  <p><strong>Specialty:</strong> {doc.specialty}</p>
                  <p><strong>Experience:</strong> {doc.experience} years</p>
                  <p><strong>Rating:</strong> ⭐ {doc.rating}</p>
                  <p><strong>Location:</strong> {doc.location}</p>
                  <div className="mode-buttons">
                    {/* <button onClick={() => this.handleBooking(doc, 'Online')} className="online-btn">Online</button>
                    <button onClick={() => this.handleBooking(doc, 'Offline')} className="offline-btn">Offline</button> */}
                 <button onClick={() => this.handleBooking(doc, 'Offline')} className="offline-btn">Book Appointment</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-results">No doctors found for this specialization.</p>
        )}
        <About/>
        <ContactUs/>
        <Footer/>
      </div>
    );
  }
}

export default withParams(DoctorList);
