import React from 'react';
import './App.css';

function App() {
  // Heading using JSX
  const heading = <h1>🏢 Office Space Rental Listings</h1>;

  // Image attribute JSX
  const imageUrl = "https://via.placeholder.com/400x200?text=Office+Space";

  // Office object
  const office = {
    name: "Skyline Corporate Tower",
    rent: 75000,
    address: "5th Avenue, New York, NY"
  };

  // Office list
  const officeList = [
    { name: "Skyline Tower", rent: 75000, address: "New York" },
    { name: "Downtown Hub", rent: 55000, address: "Chicago" },
    { name: "Green Valley", rent: 82000, address: "San Francisco" },
    { name: "Tech Park", rent: 49000, address: "Austin" }
  ];

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      {heading}

      <img src={imageUrl} alt="Office Space" style={{ width: '400px', height: '200px', margin: '20px 0' }} />

      <h2>🏙️ Featured Office</h2>
      <p><strong>Name:</strong> {office.name}</p>
      <p>
        <strong>Rent:</strong>{' '}
        <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
          ₹{office.rent}
        </span>
      </p>
      <p><strong>Address:</strong> {office.address}</p>

      <h2>📋 Available Offices</h2>
      <ul>
        {officeList.map((item, index) => (
          <li key={index} style={{ marginBottom: '15px' }}>
            <p><strong>Name:</strong> {item.name}</p>
            <p>
              <strong>Rent:</strong>{' '}
              <span style={{ color: item.rent < 60000 ? 'red' : 'green' }}>
                ₹{item.rent}
              </span>
            </p>
            <p><strong>Address:</strong> {item.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
