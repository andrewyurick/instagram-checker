import React, { useState } from 'react';

import './App.css';
import EnemiesList from './Components/EnemiesList';
import FollowStats from './Components/FollowStats';
import LoginModal from './Components/LoginModal';
import TwoTextBoxes from './Components/TwoTextBoxes';


function App() {

  const [isModalOpen, setModalOpen] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (username, password) => {
  setCredentials({ username, password });
  // Here, you can eventually integrate OAuth 2.0 login logic
  };

  return (
    <div className="App">
      <header className="App-header">
      <button className='login-button' onClick={() => setModalOpen(true)}>Login</button>
        <LoginModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onLogin={handleLogin}
        />
        <FollowStats/>
        <EnemiesList/>
        <TwoTextBoxes/>
      </header>
    </div>
  );
}

export default App;
