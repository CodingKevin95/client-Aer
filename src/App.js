import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import Service from './pages/Services';
import Footerpage from './pages/Footerpage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Careerpage from './pages/Careerpage';
import Mainpage from './pages/Mainpage';
import ReactGa from 'react-ga'
import { useEffect } from 'react';
import AppointmentPolicy from './pages/AppointmentPolicy';
import {Helmet} from "react-helmet";


function App() {
  useEffect(() => {
    ReactGa.initialize('G-GDXBCNSYD9')

    //report page being view to google
    ReactGa.pageview('/')
  }, [])

  return (
    <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Aer</title>
          <link rel="canonical" href="https://aernailbar.com/" />
          <meta name="description" content="Aer Nailbar Website" />
      </Helmet>
      <BrowserRouter>
        <div className='mainpage'>
          {/* <Navbar /> */}
          {/* <Homepage />
          <Service />
          <Portfolio />
          <Footerpage /> */}
          <Routes>
            <Route path="/" element={<Mainpage />}/> 
            <Route path="/career" element={<Careerpage />}/>
            <Route path="/appointment" element={<AppointmentPolicy />}/> 
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
