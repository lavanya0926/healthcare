

import { useEffect, useState } from "react";
import "./DoctorDashboard.css";
import Header from "../Header";
import About from "../About";
import ContactUs from "../ContactUs";
import Footer from "../Footer";

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [filteredDate, setFilteredDate] = useState("");
  const [rescheduleId, setRescheduleId] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [consultationNotes, setConsultationNotes] = useState({});
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const allAppointments = JSON.parse(localStorage.getItem("healthAppointments")) || [];
    const matchingAppointments = allAppointments.filter(
      (appt) => appt.specialization === currentUser.specialization
    );
    setAppointments(matchingAppointments);
  }, [currentUser.specialization]);

  const updateAppointments = (updatedList) => {
    setAppointments(updatedList);
    const allAppointments = JSON.parse(localStorage.getItem("healthAppointments")) || [];
    const updatedAll = allAppointments.map((appt) =>
      updatedList.find((a) => a.id === appt.id) || appt
    );
    localStorage.setItem("healthAppointments", JSON.stringify(updatedAll));
  };

  const handleComplete = (id) => {
    const updated = appointments.map((appt) =>
      appt.id === id
        ? {
            ...appt,
            status: "Confirmed",
            consultation: consultationNotes[id] || "No notes provided",
          }
        : appt
    );
    updateAppointments(updated);
    setConsultationNotes((prev) => ({ ...prev, [id]: "" }));
  };

  const handleCancel = (id) => {
    const updated = appointments.map((appt) =>
      appt.id === id ? { ...appt, status: "Cancelled" } : appt
    );
    updateAppointments(updated);
  };

  const handleReschedule = (id) => {
    setRescheduleId(id);
  };

  const confirmReschedule = () => {
    const updated = appointments.map((appt) =>
      appt.id === rescheduleId
        ? { ...appt, date: newDate, time: newTime, status: "Rescheduled" }
        : appt
    );
    updateAppointments(updated);
    setRescheduleId(null);
    setNewDate("");
    setNewTime("");
  };

  const filteredAppointments = filteredDate
    ? appointments.filter((appt) => appt.date === filteredDate)
    : appointments;

  const todayDate = new Date().toISOString().split("T")[0];

  return (
    <>
      <Header />

      <div className="dashboard-container">
        <h2>Welcome Dr. {currentUser.name}</h2>
        <p><strong>Specialization:</strong> {currentUser.specialization}</p>

        <div className="filter-section">
          <label>Filter by Date:</label>
          <input
            type="date"
            value={filteredDate}
            onChange={(e) => setFilteredDate(e.target.value)}
          />
        </div>

        <div className="appointments-list">
          <h3>Manage Appointments</h3>
          {filteredAppointments.length === 0 ? (
            <p>No appointments found.</p>
          ) : (
            <ul>
              {filteredAppointments.map((appt) => (
                <li key={appt.id} className={`appointment-card ${appt.status.toLowerCase()}`}>
                  <p><strong>Patient:</strong> {appt.patientName}</p>
                  <p><strong>Date:</strong> {appt.date}</p>
                  <p><strong>Time:</strong> {appt.time}</p>
                  <p><strong>Status:</strong> {appt.status}</p>
                  <p><strong>Symptoms:</strong> {appt.symptoms || "Not provided"}</p>
                  <p><strong>Consultation:</strong> {appt.consultation || "Not yet provided"}</p>

                  {appt.status !== "Confirmed" && appt.status !== "Cancelled" && (
                    <>
                      <div className="consultation-field">
                        <label>Consultation Notes:</label>
                        <textarea
                          rows="3"
                          placeholder="Suggest medicines or advice"
                          value={consultationNotes[appt.id] || ""}
                          onChange={(e) =>
                            setConsultationNotes((prev) => ({
                              ...prev,
                              [appt.id]: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="action-buttons">
                        <button onClick={() => handleComplete(appt.id)}>Confirm</button>
                        <button onClick={() => handleCancel(appt.id)}>Cancel</button>
                        <button onClick={() => handleReschedule(appt.id)}>Reschedule</button>
                      </div>
                    </>
                  )}

                  {rescheduleId === appt.id && (
                    <div className="reschedule-form">
                      <input
                        type="date"
                        value={newDate}
                        min={todayDate}
                        onChange={(e) => setNewDate(e.target.value)}
                        required
                      />
                      <input
                        type="time"
                        value={newTime}
                        onChange={(e) => setNewTime(e.target.value)}
                        required
                      />
                      <button onClick={confirmReschedule}>Confirm</button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="info-column">
        <About />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default DoctorDashboard;
