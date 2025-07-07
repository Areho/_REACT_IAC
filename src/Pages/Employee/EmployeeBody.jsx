import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EmployeeDashboard from '../../components/Dashboard/EmployeeDashboard';
import './EmployeePage.css';
import EmployeeSidebar from '../../components/Sidebar/EmployeeSidebar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const EmployeeBody = () => {
    return (
        <div className="admin-page">
      <EmployeeSidebar />
      <div className="main">
        <Header />
        <EmployeeDashboard />
        <Footer />
      </div>
    </div>
    );
}

export default EmployeeBody;