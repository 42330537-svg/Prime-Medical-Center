import { Link } from 'react-router-dom';

import general from '../assets/general.jpg.jpeg';
import dentistry from '../assets/dentistry.jpg.jpeg';
import dermatology from '../assets/dermatology.jpg.jpeg';
import pediatrics from '../assets/pediatric.jpg.jpeg';
import cardiology from '../assets/cardiology.jpg.jpeg';
import gynecology from '../assets/gynecology.jpg.jpeg';

function Departments() {
  return (
    <div className="departments">

      <h1>Our Departments</h1>

      <p>
        Explore our medical departments and find the right care for your needs.
      </p>

      <div className="department-list">
 
        <Link to="/generalmedicinedrs" className="department-card">
          <img src={general} alt="General Medicine" />
          <h2>General Medicine</h2>
          <p>Primary healthcare and general medical consultations.</p>
        </Link>

        <Link to="/dentistrydrs" className="department-card">
          <img src={dentistry} alt="Dentistry" />
          <h2>Dentistry</h2>
          <p>Dental care and oral health services.</p>
        </Link>

        <Link to="/dermatologydrs" className="department-card">
          <img src={dermatology} alt="Dermatology" />
          <h2>Dermatology</h2>
          <p>Skin care and dermatological treatments.</p>
        </Link>

        <Link to="/pediatricsdrs" className="department-card">
          <img src={pediatrics} alt="Pediatrics" />
          <h2>Pediatrics</h2>
          <p>Healthcare services for infants and children.</p>
        </Link>

        <Link to="/cardiologydrs" className="department-card">
          <img src={cardiology} alt="Cardiology" />
          <h2>Cardiology</h2>
          <p>Heart health and cardiovascular care.</p>
        </Link>

        <Link to="/gynecologydrs" className="department-card">
          <img src={gynecology} alt="Gynecology" />
          <h2>Gynecology</h2>
          <p>Women's health and medical care.</p>
        </Link>

      </div>
    </div>
  );
}

export default Departments;