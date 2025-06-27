import './App.css';
import Navbar from './components/Navbar.js';
import Register from './components/Register.js'
import Login from './components/Login.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Register />
      <Login />
    </div>
  );
}

export default App;