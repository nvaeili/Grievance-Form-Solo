import React from 'react';
import Navbar from './component/Navbar';
import LandingPage from './component/LandingPage';
import GrievanceForm from  './form/GrievanceForm';
import Loginpage from './AdminLogin/Login';
import DashBoard from './AdminDashboard/Dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>



      <BrowserRouter>
      <Routes>
        <Route path = '/' element={<LandingPage/>}/>
        <Route path = '/form' element={<GrievanceForm/>}/>
        <Route path = '/login' element= {<Loginpage/>}/>
        <Route path = '/dashboard' element ={<DashBoard/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
