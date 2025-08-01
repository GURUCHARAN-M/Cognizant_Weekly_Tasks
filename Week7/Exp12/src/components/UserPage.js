import React from 'react';
import FlightDetails from './FlightDetails';

const UserPage = () => {
  return (
    <div>
      <h2>🧑‍✈️ User Dashboard</h2>
      <p>You are logged in. You can now book flights.</p>
      <FlightDetails showBooking={true} />
    </div>
  );
};

export default UserPage;
