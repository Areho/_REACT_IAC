import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import RoleSelector from '../pages/Role/RoleSelector';
import AdminPage from '../pages/Admin/AdminPage';
import EmployeePage from '../pages/Employee/EmployeePage';
import EmployeeBody from '../Pages/Employee/EmployeeBody';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoleSelector />} />
        <Route path="/admin/*" element={<AdminPage />} >
        </Route>
        <Route path="/employee/*" element={<EmployeeBody />} >
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;