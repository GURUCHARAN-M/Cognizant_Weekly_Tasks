import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(prev => !prev);
  };

  // Element variable for conditional rendering
  let pageContent = isLoggedIn ? <UserPage /> : <GuestPage />;

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎟️ Ticket Booking App</h1>

      <button onClick={handleLoginLogout}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      <hr />
      {pageContent}
    </div>
  );
}

export default App;
