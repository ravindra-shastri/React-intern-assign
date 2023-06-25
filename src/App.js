import './style.css';
import Navbar from './Navbar';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
