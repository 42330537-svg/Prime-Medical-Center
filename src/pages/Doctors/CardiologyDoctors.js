import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DoctorContext from '../../Context/DoctorsContext';

import rami from '../../assets/doctors/dr.RamiDaher.jpeg';
import tala from '../../assets/doctors/dr.TalaAyoub.jpeg';
import ali from '../../assets/doctors/dr.AliBarakat.jpeg';

function CardiologyDoctors() {

  const { setSelectedDoctor } = useContext(DoctorContext);

  return (
    <div className="doctors-page">

      <div className="doctors-header">
        <h1>Cardiology Doctors</h1>
        <p>Meet our experienced Cardiology doctors.</p>
      </div>

      <div className="doctor-list">

        <Link
          to="/booking"
          className="doctor-card"
          onClick={() => setSelectedDoctor({
            id: 13,
            name: 'Dr. Rami Daher',
            specialty: 'Cardiologist',
            department: 'Cardiology'
          })}
        >
          <img src={rami} alt="Dr. Rami Daher" />
          <h3>Dr. Rami Daher</h3>
          <p>Cardiologist</p>
        </Link>

        <Link
          to="/booking"
          className="doctor-card"
          onClick={() => setSelectedDoctor({
            id: 14,
            name: 'Dr. Tala Ayoub',
            specialty: 'Heart Specialist',
            department: 'Cardiology'
          })}
        >
          <img src={tala} alt="Dr. Tala Ayoub" />
          <h3>Dr. Tala Ayoub</h3>
          <p>Heart Specialist</p>
        </Link>

        <Link
          to="/booking"
          className="doctor-card"
          onClick={() => setSelectedDoctor({
            id: 15,
            name: 'Dr. Ali Barakat',
            specialty: 'Interventional Cardiologist',
            department: 'Cardiology'
          })}
        >
          <img src={ali} alt="Dr. Ali Barakat" />
          <h3>Dr. Ali Barakat</h3>
          <p>Interventional Cardiologist</p>
        </Link>

      </div>
    </div>
  );
}

export default CardiologyDoctors;