// src/components/SpecializationSelector.js
// const SpecializationSelector = ({ value, onChange }) => (
//   <select value={value} onChange={onChange} required>
//     <option value="">Select Specialization</option>
//     <option value="Cardiology">Cardiology</option>
//     <option value="Dermatology">Dermatology</option>
//     <option value="Neurology">Neurology</option>
//     <option value="Pediatrics">Pediatrics</option>
//     <option value="General Medicine">General Medicine</option>
//   </select>
// );

// export default SpecializationSelector;



// src/components/Auth/SpecializationSelector.js

// const SpecializationSelector = ({ value, onChange }) => (
//   <div className="input-group">
//     <label htmlFor="specialization">🩺 Select Specialization</label>
//     <select
//       id="specialization"
//       value={value}
//       onChange={onChange}
//       required
//     >
//       <option value="">-- Choose Specialization --</option>
//       <option value="Cardiology">Cardiology</option>
//       <option value="Dentistry">Dentistry</option>
//       <option value="Neurology">Neurology</option>
//       <option value="Pediatrics">Pediatrics</option>
//       <option value="Orthopedics">Orthopedics</option>
//       <option value="Dermatology">Dermatology</option>
//     </select>
//   </div>
// );

// export default SpecializationSelector;


// components/Auth/SpecializationSelector.js
const SpecializationSelector = ({ value, onChange }) => (
  <div className="input-group">
    <label htmlFor="specialization">🩺 Select Specialization</label>
    <select
      id="specialization"
      value={value}
      onChange={onChange}
      required
    >
      <option value="">-- Choose Specialization --</option>
      <option value="Cardiologist">Cardiologist</option>
      <option value="Dentist">Dentist</option>
      <option value="Neurologist">Neurologist</option>
      <option value="Pediatrician">Pediatrician</option>
      <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
      <option value="Dermatologist">Dermatologist</option>
    </select>
  </div>
);

export default SpecializationSelector;
