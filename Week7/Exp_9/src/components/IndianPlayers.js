import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ["Virat", "Rahul", "Pant", "Jadeja", "Shami"];
  const evenTeam = ["Rohit", "Gill", "Hardik", "Bumrah", "Kuldeep"];

  // Destructuring
  const [firstOdd, secondOdd, ...restOdd] = oddTeam;
  const [firstEven, secondEven, ...restEven] = evenTeam;

  // Merging arrays using ES6 spread
  const T20players = ["Kohli", "Rohit", "Gill"];
  const RanjiTrophy = ["Sarfaraz", "Jaiswal", "Gaikwad"];
  const allPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>🏏 Indian Players</h2>

      <h3>Odd Team (Destructured)</h3>
      <ul>
        <li>{firstOdd}</li>
        <li>{secondOdd}</li>
        {restOdd.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>

      <h3>Even Team (Destructured)</h3>
      <ul>
        <li>{firstEven}</li>
        <li>{secondEven}</li>
        {restEven.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>

      <h3>Combined Team (T20 + Ranji)</h3>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
