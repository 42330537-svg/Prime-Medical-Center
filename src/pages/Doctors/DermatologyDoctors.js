import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DoctorContext from '../../Context/DoctorsContext';

import maya from '../../assets/doctors/dr.MayaFarah.jpeg';
import omar from '../../assets/doctors/dr.OmarNassar.jpeg';
import rania from '../../assets/doctors/dr.RaniaKhoury.jpeg';

function DermatologyDoctors() {

  const { setSelectedDoctor } = useContext(DoctorContext);

  return (
    <div className="doctors-page">

      <div className="doctors-header">
        <h1>Dermatology Doctors</h1>
        <p>Meet our experienced Dermatology doctors.</p>
      </div>

      <div className="doctor-list">

        <Link
          to="/booking"
          className="doctor-card"
          onClick={() => setSelectedDoctor({
            id: 7,
            name: 'Dr. Maya Farah',
            specialty: 'Dermatologist',
            department: 'Dermatology'
          })}
        >
          <img src={maya} alt="Dr. Maya Farah" />
          <h3>Dr. Maya Farah</h3>
          <p>Dermatologist</p>
        </Link>

        <Link
          to="/booking"
          className="doctor-card"
          onClick={() => setSelectedDoctor({
            id: 8,
            name: 'Dr. Omar Nassar',
            specialty: 'Skin Specialist',
            department: 'Dermatology'
          })}
        >
          <img src={omar} alt="Dr. Omar Nassar" />
          <h3>Dr. Omar Nassar</h3>
          <p>Skin Specialist</p>
        </Link>

        <Link
          to="/booking"
          className="doctor-card"
          onClick={() => setSelectedDoctor({
            id: 9,
            name: 'Dr. Rania Khoury',
            specialty: 'Cosmetic Dermatologist',
            department: 'Dermatology'
          })}
        >
          <img src={rania} alt="Dr. Rania Khoury" />
          <h3>Dr. Rania Khoury</h3>
          <p>Cosmetic Dermatologist</p>
        </Link>

      </div>
    </div>
  );
}

export default DermatologyDoctors;