import React from 'react';
import './Dashboard.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import EmployeeBody from '../../Pages/Employee/EmployeeBody';
import EmployeePage from '../../pages/Employee/EmployeePage';




const EmployeeDashboard = () => {
  return (
    <main className="dashboard">
      <Routes>
        <Route path="/" element={<EmployeePage/>} />
      </Routes>
    </main>
  );
};

export default EmployeeDashboard;