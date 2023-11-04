import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import StudentPage from './StudentPage'; // Import the StudentPage component
import ManagerPage from './ManagerPage';
import ForgotPassword from './ForgotPassword';
import HostelWarden from './HostelWarden';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage/>} exact="true" />
          <Route path="/student" element={<StudentPage/>} /> 
          <Route path="/manager" element={<ManagerPage/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/hostel-warden" element={<HostelWarden/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
