import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat Kohli", score: 90 },
    { name: "Rohit Sharma", score: 65 },
    { name: "KL Rahul", score: 75 },
    { name: "Shubman Gill", score: 45 },
    { name: "Rishabh Pant", score: 80 },
    { name: "Hardik Pandya", score: 50 },
    { name: "Ravindra Jadeja", score: 70 },
    { name: "Bumrah", score: 88 },
    { name: "Shami", score: 35 },
    { name: "Kuldeep Yadav", score: 78 },
    { name: "Surya Kumar", score: 60 }
  ];

  // Filter players with scores below 70 using arrow functions
  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>🏏 All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>🎯 Players with score below 70</h3>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
