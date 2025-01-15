import React, { useState } from 'react';

const BookSlot = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const timeOptions = [
        '10:00 AM to 11:00 AM',
        '11:00 AM to 12:00 PM', 
        '12:00 PM to 1:00 PM', 
        '1:00 PM to 2:00 PM', 
        '2:00 PM to 3:00 PM',
        '3:00 PM to 4:00 PM', 
    ];

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${selectedDate} at ${selectedTime}`);
  };

  return (
    <div className="flex justify-center items-center h-[700px] mt-6 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Book Your Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="date" className="block text-lg font-medium text-gray-700">Select Date</label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-lg font-medium text-gray-700">Select Time</label>
            <select
              id="time"
              value={selectedTime}
              onChange={handleTimeChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a time</option>
              {timeOptions.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookSlot;
