import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoleSelector from '../pages/Role/RoleSelector';
import AdminPage from '../pages/Admin/AdminPage';
import EmployeePage from '../pages/Employee/EmployeePage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelector />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/employee" element={<EmployeePage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;