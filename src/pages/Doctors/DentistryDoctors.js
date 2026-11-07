import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DoctorContext from '../../Context/DoctorsContext';

import sara from '../../assets/doctors/dr.SaraDaher.jpeg';
import fadi from '../../assets/doctors/dr.FadiMansour.jpeg';
import nadine from '../../assets/doctors/dr.NadineAbiSaab.jpeg';

function DentistryDoctors() {

  const { setSelectedDoctor } = useContext(DoctorContext);

  return (
    <div className="doctors-page">

      <div className="doctors-header">
        <h1>Dentistry Doctors</h1>
        <p>Meet our experienced Dentistry doctors.</p>
      </div>

      <div className="doctor-list">

        <Link
          to="/booking"
          className="doctor-card"
          onClick={() => setSelectedDoctor({
            id: 4,
            name: 'Dr. Sara Daher',
            specialty: 'General Dentist',
            department: 'Dentistry'
          })}
        >
          <img src={sara} alt="Dr. Sara Daher" />
          <h3>Dr. Sara Daher</h3>
          <p>General Dentist</p>
        </Link>

        <Link
          to="/booking"
          className="doctor-card"
          onClick={() => setSelectedDoctor({
            id: 5,
            name: 'Dr. Fadi Mansour',
            specialty: 'Orthodontist',
            department: 'Dentistry'
          })}
        >
          <img src={fadi} alt="Dr. Fadi Mansour" />
          <h3>Dr. Fadi Mansour</h3>
          <p>Orthodontist</p>
        </Link>

        <Link
          to="/booking"
          className="doctor-card"
          onClick={() => setSelectedDoctor({
            id: 6,
            name: 'Dr. Nadine Abi Saab',
            specialty: 'Cosmetic Dentist',
            department: 'Dentistry'
          })}
        >
          <img src={nadine} alt="Dr. Nadine Abi Saab" />
          <h3>Dr. Nadine Abi Saab</h3>
          <p>Cosmetic Dentist</p>
        </Link>

      </div>
    </div>
  );
}

export default DentistryDoctors;