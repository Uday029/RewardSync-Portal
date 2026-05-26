import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RewardBonus from './pages/RewardBonus';
import Recognition from './pages/Recognition';
import CareerGrowth from './pages/CareerGrowth';
import HRAnalytics from './pages/HRAnalytics';
import Profile from './pages/Profile';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* Routes with Sidebar & Header Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="rewards" element={<RewardBonus />} />
          <Route path="recognition" element={<Recognition />} />
          <Route path="career" element={<CareerGrowth />} />
          <Route path="analytics" element={<HRAnalytics />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
