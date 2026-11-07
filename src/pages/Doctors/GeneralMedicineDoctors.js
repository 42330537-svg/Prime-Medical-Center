import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DoctorContext from '../../Context/DoctorsContext';

import ahmad from '../../assets/doctors/dr.AhmadHassan.jpeg';
import nour from '../../assets/doctors/dr.NourKhalil.jpeg';
import karim from '../../assets/doctors/dr.KarimYoussef.jpeg';

function GeneralMedicineDoctors() {

  const { setSelectedDoctor } = useContext(DoctorContext);

  return (
    <div className="doctors-page">

      <div className="doctors-header">
        <h1>General Medicine Doctors</h1>
        <p>Meet our experienced General Medicine doctors.</p>
      </div>

      <div className="doctor-list">

        <Link
          to="/booking"
          className="doctor-card"
          onClick={() => setSelectedDoctor({
            id: 1,
            name: 'Dr. Ahmad Hassan',
            specialty: 'General Physician',
            department: 'General Medicine'
          })}
        >
          <img src={ahmad} alt="Dr. Ahmad Hassan" />
          <h3>Dr. Ahmad Hassan</h3>
          <p>General Physician</p>
        </Link>

        <Link
          to="/booking"
          className="doctor-card"
          onClick={() => setSelectedDoctor({
            id: 2,
            name: 'Dr. Nour Khalil',
            specialty: 'Family Medicine',
            department: 'General Medicine'
          })}
        >
          <img src={nour} alt="Dr. Nour Khalil" />
          <h3>Dr. Nour Khalil</h3>
          <p>Family Medicine</p>
        </Link>

        <Link
          to="/booking"
          className="doctor-card"
          onClick={() => setSelectedDoctor({
            id: 3,
            name: 'Dr. Karim Youssef',
            specialty: 'Internal Medicine',
            department: 'General Medicine'
          })}
        >
          <img src={karim} alt="Dr. Karim Youssef" />
          <h3>Dr. Karim Youssef</h3>
          <p>Internal Medicine</p>
        </Link>

      </div>
    </div>
  );
}

export default GeneralMedicineDoctors;