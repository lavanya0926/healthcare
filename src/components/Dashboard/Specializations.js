
import { useNavigate } from 'react-router-dom';
import './Specializations.css';
import Header from '../Header';

function Specializations() {
  const navigate = useNavigate();

  const specializations = [
    { name: 'Cardiology', image: 'https://tse2.mm.bing.net/th/id/OIP.ilm146UswuRHW8K4lm049AHaEK?w=272&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { name: 'Dermatology', image: 'https://tse2.mm.bing.net/th/id/OIP.sMy86_p-Z55WXrpLA7b-_AHaE8?w=302&h=201&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { name: 'Orthopedics', image: 'https://tse4.mm.bing.net/th/id/OIP.wSRR9jauAt5d_zeQbML5aAHaDH?w=208&h=140&c=6&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { name: 'Pediatrics', image: 'https://tse3.mm.bing.net/th/id/OIP.lY2bPuvD7BMzjptSktaZeAHaG1?w=188&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { name: 'Neurology', image: 'https://tse1.mm.bing.net/th/id/OIP.rATubpZLtA7rrlwtxshpvgHaFj?w=181&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' },
    { name: 'Dentist', image: 'https://tse4.mm.bing.net/th/id/OIP.Q_jRyCyNBOKCpwdasXKsFQHaEK?w=280&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3' }
  ];

  const handleSpecializationClick = (specName) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      alert('Please login to continue.');
      navigate('/login-selection');
    } else {
      navigate(`/doctors/${specName.toLowerCase()}`);
    }
  };

  return (
    <div className="specializations-container">
      <Header />
      <h1>Select Specialization</h1>
      <div className="specialization-grid">
        {specializations.map((spec, index) => (
          <div
            key={index}
            className="specialization-card"
            onClick={() => handleSpecializationClick(spec.name)}
            style={{ cursor: 'pointer' }}
          >
            <img src={spec.image} alt={spec.name} className="specialization-image" />
            <h3>{spec.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Specializations;

