import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import RoleLogin from './components/RoleLogin';
import ResetPassword from './components/ResetPassword';
import SignUp from './components/SignUp';
import AdminDashboard from './components/AdminDashboard';
import StationManagerDashboard from './components/StationManagerDashboard';
import PompistDashboard from './components/PompistDashboard';
import PurchaserDashboard from './components/PurchaserDashboard';
import FinanceManagerDashboard from './components/FinanceManagerDashboard';
import ClientDashboard from './components/ClientDashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/:role/login" element={<RoleLogin />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/:role/sign-up" element={<SignUp />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/station-manager/dashboard" element={<StationManagerDashboard />} />
        <Route path="/pompist/dashboard" element={<PompistDashboard />} />
        <Route path="/purchaser/dashboard" element={<PurchaserDashboard />} />
        <Route path="/finance-manager/dashboard" element={<FinanceManagerDashboard />} />
        <Route path="/client/dashboard" element={<ClientDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
