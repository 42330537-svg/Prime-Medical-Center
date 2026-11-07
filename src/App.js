import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Departments from './pages/Department';


import Navbar from './components/NavBar';

import { Routes, Route } from 'react-router-dom';

import { DoctorProvider } from './Context/DoctorsContext';
import Booking from './pages/Booking'
import './App.css';
import PediatricsDoctors from './pages/Doctors/PediatricsDoctors';
import CardiologyDoctors from './pages/Doctors/CardiologyDoctors';
import GynecologyDoctors from './pages/Doctors/GynecologyDoctors';
import GeneralMedicineDoctors from './pages/Doctors/GeneralMedicineDoctors';
import DermatologyDoctors from './pages/Doctors/DermatologyDoctors';
import DentistryDoctors from './pages/Doctors/DentistryDoctors';
function App() {
  return (
    <DoctorProvider>
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/departments" element={<Departments />} />

        <Route path="/generalmedicinedrs" element={<GeneralMedicineDoctors/>}/>
        <Route path="/dentistrydrs" element={<DentistryDoctors/>}/>
        <Route path="/pediatricsdrs" element={<PediatricsDoctors/>}/>
        <Route path="/cardiologydrs" element={<CardiologyDoctors/>}/>
        <Route path="/gynecologydrs" element={<GynecologyDoctors/>}/>
        <Route path="/dermatologydrs" element={<DermatologyDoctors/>}/>

        <Route path="/booking" element={<Booking />} />

       
        
      </Routes>

    </div>
    </DoctorProvider>
  );
}

export default App;