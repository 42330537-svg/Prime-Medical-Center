import { useContext, useState } from 'react';
import DoctorContext from '../Context/DoctorsContext';
import { doctorSchedules } from '../data/doctorSchedules';
import './Booking.css';

function Booking() {
  const {
    selectedDoctor,
    bookedSlots,
    setBookedSlots
  } = useContext(DoctorContext);

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');

  const [message, setMessage] = useState('');

  
  const today = new Date();
  const minDate =
    today.getFullYear() + '-' +
    String(today.getMonth() + 1).padStart(2, '0') + '-' + 
    String(today.getDate()).padStart(2, '0');
 
  if (!selectedDoctor) {
    return (
      <div className="booking-page">
        <h2>Please select a doctor first.</h2>
      </div>
    );
  }

  const doctorSchedule = doctorSchedules[selectedDoctor.id] || {};

  function isBooked(date, time) {
    return bookedSlots.some(
      (slot) =>
        slot.doctorId === selectedDoctor.id &&
        slot.date === date &&
        slot.time === time
    );
  }


  let availableTimes = [];

  if (selectedDate) { 
    const date = new Date(selectedDate );
    

    const dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    
    const selectedDay = dayNames[date.getDay()];

    availableTimes = doctorSchedule[selectedDay] || [];
  }

  function handleBooking(e) {
    e.preventDefault();
    if (!selectedTime) {
      setMessage('Please select time.');
      return;
    }


    if (isBooked(selectedDate, selectedTime)) {
      setMessage('This appointment is already booked.');
      return;//it stopped working because i made the button disabled
    }

    const newBooking = {
      doctorId: selectedDoctor.id,
      date: selectedDate,
      time: selectedTime,
      patientName,
      phone,
      reason
    };

    setBookedSlots([...bookedSlots, newBooking]);

    setMessage(
      `Appointment confirmed for ${patientName} on ${selectedDate} at ${selectedTime}.`
    );

    setSelectedTime('');
    setPatientName('');
    setPhone('');
    setReason('');
   
  }

  return (
    <div className="booking-page">

      <div className="booking-header">
        <h1>Book an Appointment</h1>
        <p>Choose your preferred date and time.</p>
      </div>

      <div className="booking-container">
        <div className="booking-form-section">

          <h2>Patient Information</h2>

          <form onSubmit={handleBooking}>

            <label>Patient Name</label>
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="Enter your full name"
              required
            />

            <label>Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              required
            />

            <label>Reason for Visit</label>
            <textarea 
              value={reason} 
              onChange={(e) => setReason(e.target.value)}
              placeholder="Write the reason for your visit"
              rows="3"
            />

            <h2>Select Appointment Date</h2>

            <input
              type="date"
              min={minDate}
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setSelectedTime('');
                setMessage('');  
              }}
              required
            />

            {selectedDate ? (

      <> 
      

        <h2>Available Time Slots</h2>

        {availableTimes.length > 0 ? (
          <div className="slots-list">

            {availableTimes.map((time) => {
           
              const booked = isBooked(selectedDate, time);

              return (

                <button

                  type="button"

                  key={time}

                  disabled={booked}
                 className='time-btn'
                  onClick={() => setSelectedTime(time)}

                >
                 
                  {booked ? `${time} - Booked` : time}  

                </button>

              );

            })}

          </div>

        ) : (

          <p>No available appointments on this day.</p>

        )}

      </>

    ) : null}

            <button type="submit" className="confirm-btn"> 
              Confirm Appointment
            </button>

           {message ? (
          <p className="booking-message">{message}</p>
              ) : null}

          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;