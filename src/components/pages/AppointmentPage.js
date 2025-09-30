import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import doctors from "../data/DoctorData";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "./AppointmentPage.css";
import Header from "../Header";

const Appointment = () => {
  const { doctorId, mode } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [rescheduleData, setRescheduleData] = useState(null);

  useEffect(() => {
    const storedReschedule = JSON.parse(localStorage.getItem("rescheduleInfo"));
    if (storedReschedule) {
      setRescheduleData(storedReschedule);
      setDate(storedReschedule.date);
      setTime(storedReschedule.time);
      setSymptoms(storedReschedule.symptoms || "");
    }
  }, []);

  const doctor = doctors.find((doc) =>
    rescheduleData ? doc.name === rescheduleData.doctorName : doc.id === doctorId
  );

  const isPastDate = (selectedDate) => {
    const today = new Date();
    const chosen = new Date(selectedDate);
    return chosen < today.setHours(0, 0, 0, 0);
  };

  const handleConfirm = () => {
    if (!date || !time) {
      alert("Please select both date and time.");
      return;
    }

    if (isPastDate(date)) {
      alert("Please select a future date.");
      return;
    }

    if (!doctor) {
      alert("Doctor information is missing.");
      return;
    }

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const newAppointment = {
      id: Date.now(),
      doctorId: doctor.id,
      doctorName: doctor.name,
      specialization: doctor.specialty,
      patientName: currentUser?.name || "Unknown Patient",
      patientEmail: currentUser?.email || "unknown@example.com",
      date,
      time,
      mode: mode || "Offline",
      symptoms,
      status: "Pending"
    };

    const existingAppointments = JSON.parse(localStorage.getItem("healthAppointments")) || [];

    // Remove cancelled appointment if rescheduling
    const rescheduleInfo = JSON.parse(localStorage.getItem("rescheduleInfo"));
    let updatedAppointments = existingAppointments;

    if (rescheduleInfo) {
      updatedAppointments = existingAppointments.filter(
        (appt) => appt.id !== rescheduleInfo.id
      );
    }

    // Add new appointment
    updatedAppointments.push(newAppointment);
    localStorage.setItem("healthAppointments", JSON.stringify(updatedAppointments));

    // Clean up
    localStorage.removeItem("rescheduleInfo");
    setConfirmed(true);

    setTimeout(() => {
      navigate("/patient-dashboard");
    }, 2000);
  };

  if (!doctor) {
    return (
      <div className="appointment-wrapper">
        <Header />
        <p style={{ padding: "100px", textAlign: "center" }}>
          ❌ Doctor not found. Please try again.
        </p>
      </div>
    );
  }

  return (
    <div className="appointment-wrapper">
      <Header />
      <div className="appointment-card">
        <div className="doctor-profile">
          <img
            src={doctor?.picture || "https://cdn-icons-png.flaticon.com/512/387/387561.png"}
            alt={doctor?.name || "Doctor Avatar"}
            className="doctor-avatar"
          />
          <div className="doctor-meta">
            <h2>🩺 {rescheduleData ? "Reschedule Appointment" : "Book an Appointment"}</h2>
            <p>Doctor ID: <strong>{doctorId}</strong></p>
            <p><strong>{doctor.name}</strong></p>
            <p>{doctor.specialty} — {doctor.location}</p>
          </div>
        </div>

        {!confirmed ? (
          <div className="form-section">
            <div className="input-group">
              <label htmlFor="date">📅 Select Date</label>
              {/* <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              /> */}
              <input
                type="date"
                id="date"
                value={date}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setDate(e.target.value)}
              />

            </div>

            <div className="input-group">
              <label>⏰ Select Time</label>
              <TimePicker
                onChange={setTime}
                value={time}
                format="hh:mm a"
                disableClock={true}
                clearIcon={null}
              />
            </div>

            <div className="input-group">
              <label>📝 Symptoms</label>
              <textarea
                rows="3"
                placeholder="Describe your symptoms"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
              />
            </div>

            <button className="confirm-btn" onClick={handleConfirm}>
              {rescheduleData ? "Confirm Reschedule" : "Confirm Appointment"}
            </button>
          </div>
        ) : (
          <div className="confirmation-section">
            <div className="success-icon">🎉</div>
            <p className="confirmation-text">
              Appointment confirmed for <strong>{date}</strong> at <strong>{time}</strong>
            </p>
            <p>Redirecting to your dashboard...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointment;
