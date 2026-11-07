import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DoctorContext from '../../Context/DoctorsContext';

import elias from '../../assets/doctors/dr.EliasSaliba.jpeg';
import leen from '../../assets/doctors/dr.LeenFares.jpeg';
import hadi from '../../assets/doctors/dr.HadiKaram.jpeg';

function PediatricsDoctors() {

  const { setSelectedDoctor } = useContext(DoctorContext);

  return (
    <div className="doctors-page">

      <div className="doctors-header">
        <h1>Pediatrics Doctors</h1>
        <p>Meet our experienced Pediatrics doctors.</p>
      </div>

      <div className="doctor-list">

        <Link
          to="/booking"
          className="doctor-card"
          onClick={() => setSelectedDoctor({
            id: 10,
            name: 'Dr. Elias Saliba',
            specialty: 'Pediatrician',
            department: 'Pediatrics'
          })}
        >
          <img src={elias} alt="Dr. Elias Saliba" />
          <h3>Dr. Elias Saliba</h3>
          <p>Pediatrician</p>
        </Link>

        <Link
          to="/booking"
          className="doctor-card"
          onClick={() => setSelectedDoctor({
            id: 11,
            name: 'Dr. Leen Fares',
            specialty: 'Child Health Specialist',
            department: 'Pediatrics'
          })}
        >
          <img src={leen} alt="Dr. Leen Fares" />
          <h3>Dr. Leen Fares</h3>
          <p>Child Health Specialist</p>
        </Link>

        <Link
          to="/booking"
          className="doctor-card"
          onClick={() => setSelectedDoctor({
            id: 12,
            name: 'Dr. Hadi Karam',
            specialty: 'Neonatologist',
            department: 'Pediatrics'
          })}
        >
          <img src={hadi} alt="Dr. Hadi Karam" />
          <h3>Dr. Hadi Karam</h3>
          <p>Neonatologist</p>
        </Link>

      </div>
    </div>
  );
}

export default PediatricsDoctors;