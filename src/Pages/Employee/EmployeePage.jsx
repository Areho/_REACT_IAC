import React from 'react';
import EmployeeSidebar from '../../components/Sidebar/EmployeeSidebar';
import Header from '../../components/Header/Header';
import EmployeeDashboard from '../../components/Dashboard/EmployeeDashboard';
import Footer from '../../components/Footer/Footer';
import './EmployeePage.css';

const EmployeePage = () => {
  return (
    <div className="employee-page">
      <EmployeeSidebar />
      <div className="main">
        <Header />
        <EmployeeDashboard />
        <Footer />
      </div>
    </div>
  );
};

export default EmployeePage;