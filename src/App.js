import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import Service from './pages/Services';
import Footerpage from './pages/Footerpage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Service />
      <Portfolio />
      <Footerpage />
    </div>
  );
}

export default App;
