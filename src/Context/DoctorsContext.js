import { createContext, useState } from 'react';

const DoctorContext = createContext();

export function DoctorProvider({ children }) {
  
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);

  return (
    <DoctorContext.Provider
      value={{
        selectedDoctor,
        setSelectedDoctor,
        bookedSlots,
        setBookedSlots
      }}
    >
      {children} 
    </DoctorContext.Provider>
  );
}

export default DoctorContext;