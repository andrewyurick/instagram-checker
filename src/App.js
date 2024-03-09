import './App.css';
import EnemiesList from './Components/EnemiesList';
import FollowStats from './Components/FollowStats';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FollowStats/>
        <EnemiesList/>
      </header>
    </div>
  );
}

export default App;
