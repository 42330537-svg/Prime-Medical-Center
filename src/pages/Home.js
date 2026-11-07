import medicalcenter from "../assets/medical-center.jpg.jpeg"
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
  
      <section className="hero">
        <div className="hero-content">
        
          <h1>Your Health, Our Priority</h1>

          <p>
            Quality healthcare and trusted doctors,
            all in one place.
          </p>
          <Link to="/departments" className="book-btn">
            Book an Appointment
           </Link>

        </div>
        <img
            src ={medicalcenter}
            alt = 'Medical Center'
            className = "hero-image"
        />
      </section>

    </div>
  );
}

export default Home;