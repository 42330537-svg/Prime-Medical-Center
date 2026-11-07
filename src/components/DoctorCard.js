import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DoctorContext from '../Context/DoctorsContext';

function DoctorCard({ id, name, specialty, department, image }) {
  const { setSelectedDoctor } = useContext(DoctorContext);

  return (
    <Link
      to="/booking"
      className="doctor-card"
      onClick={() => {
        setSelectedDoctor({
          id,
          name,
          specialty,
          department,
          image
        });
      }}
    >
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{specialty}</p>
    </Link>
  );
}

export default DoctorCard;