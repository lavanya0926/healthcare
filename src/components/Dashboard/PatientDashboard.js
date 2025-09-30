

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import "./PatientDashboard.css";
import About from "../About";
import ContactUs from "../ContactUs";
import Footer from "../Footer";

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const allAppointments = JSON.parse(localStorage.getItem("healthAppointments")) || [];
    const myAppointments = allAppointments.filter(
      (appt) => appt.patientName === currentUser.name
    );
    setAppointments(myAppointments);
  }, [currentUser.name]);

  const handleReschedule = (appt) => {
    localStorage.setItem("rescheduleInfo", JSON.stringify(appt));
    navigate(`/book/${appt.doctorId}/offline`);
  };

  return (
    <>
      <Header />
      <div className="dashboard-container">
        <h2>Welcome {currentUser.name}</h2>
        <p><strong>Role:</strong> Patient</p>

        <div className="appointments-list">
          <h3>Your Appointments</h3>
          {appointments.length === 0 ? (
            <p>No appointments scheduled.</p>
          ) : (
            <ul>
              {appointments.map((appt) => (
                <li key={appt.id} className={`appointment-card ${appt.status.toLowerCase()}`}>
                  <p><strong>Doctor:</strong> {appt.doctorName}</p>
                  <p><strong>Specialization:</strong> {appt.specialization}</p>
                  <p><strong>Date:</strong> {appt.date}</p>
                  <p><strong>Time:</strong> {appt.time}</p>
                  <p><strong>Status:</strong> {appt.status}</p>
                  <p><strong>Consultation:</strong> {appt.consultation || "Not yet provided"}</p>

                  {appt.status === "Rescheduled" && (
                    <p className="reschedule-note">📅 This appointment has been rescheduled.</p>
                  )}

                  {appt.status === "Cancelled" && (
                    <button
                      className="reschedule-button"
                      onClick={() => handleReschedule(appt)}
                    >
                      Reschedule
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Full-width sections */}
      <div className="info-column">
        <About />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default PatientDashboard;
