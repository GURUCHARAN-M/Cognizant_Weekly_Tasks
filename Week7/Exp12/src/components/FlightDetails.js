import React from 'react';

const FlightDetails = ({ showBooking }) => {
  const flight = {
    from: 'New York',
    to: 'London',
    time: '10:30 AM',
    flightNo: 'AI-203',
  };

  return (
    <div>
      <h3>✈️ Flight Details</h3>
      <p><strong>From:</strong> {flight.from}</p>
      <p><strong>To:</strong> {flight.to}</p>
      <p><strong>Time:</strong> {flight.time}</p>
      <p><strong>Flight No:</strong> {flight.flightNo}</p>

      {showBooking && (
        <button style={{ marginTop: '10px' }}>Book Now</button>
      )}
    </div>
  );
};

export default FlightDetails;
