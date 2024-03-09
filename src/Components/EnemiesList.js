import React from 'react';
import './EnemiesList.css'; // Styling

// Mock data to be replaced with list of usernames that we follow, but are not on our followers list. 
const mockEnemies = [
    { id: 1, username: "user_not_friendly1" },
    { id: 2, username: "user_not_friendly2" },
    { id: 3, username: "user_not_friendly3" },
    { id: 4, username: "user_not_friendly4" },
    { id: 5, username: "user_not_friendly5" },
    { id: 6, username: "user_not_friendly6" },
    { id: 7, username: "user_not_friendly7" },
    { id: 8, username: "user_not_friendly8" },
    { id: 9, username: "user_not_friendly9" },
    { id: 10, username: "user_not_friendly10" },
];

const EnemiesList = () => {
  return (
    <div className="enemies-container">
      <h2 className="enemies-title">Enemies</h2>
      <ul className="enemies-list">
        {mockEnemies.map((enemy) => (
          <li key={enemy.id} className="enemy">
            {enemy.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EnemiesList