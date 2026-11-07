import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DoctorContext from '../../Context/DoctorsContext';

import mariam from '../../assets/doctors/dr.MariamMansour.jpeg';
import joseph from '../../assets/doctors/dr.JosephRizk.jpeg';
import zeina from '../../assets/doctors/dr.ZeinaMoussa.jpeg';

function GynecologyDoctors() {

  const { setSelectedDoctor } = useContext(DoctorContext);

  return (
    <div className="doctors-page">

      <div className="doctors-header">
        <h1>Gynecology Doctors</h1>
        <p>Meet our experienced Gynecology doctors.</p>
      </div>

      <div className="doctor-list">

        <Link
          to="/booking"
          className="doctor-card"
          onClick={() => setSelectedDoctor({
            id: 16,
            name: 'Dr. Mariam Mansour',
            specialty: 'Gynecologist',
            department: 'Gynecology'
          })}
        >
          <img src={mariam} alt="Dr. Mariam Mansour" />
          <h3>Dr. Mariam Mansour</h3>
          <p>Gynecologist</p>
        </Link>

        <Link
          to="/booking"
          className="doctor-card"
          onClick={() => setSelectedDoctor({
            id: 17,
            name: 'Dr. Joseph Rizk',
            specialty: 'Obstetrician',
            department: 'Gynecology'
          })}
        >
          <img src={joseph} alt="Dr. Joseph Rizk" />
          <h3>Dr. Joseph Rizk</h3>
          <p>Obstetrician</p>
        </Link>

        <Link
          to="/booking"
          className="doctor-card"
          onClick={() => setSelectedDoctor({
            id: 18,
            name: 'Dr. Zeina Moussa',
            specialty: "Women's Health Specialist",
            department: 'Gynecology'
          })}
        >
          <img src={zeina} alt="Dr. Zeina Moussa" />
          <h3>Dr. Zeina Moussa</h3>
          <p>Women's Health Specialist</p>
        </Link>

      </div>
    </div>
  );
}

export default GynecologyDoctors;