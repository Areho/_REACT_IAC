import React from 'react';
import AdminSidebar from '../../components/Sidebar/AdminSidebar';
import Header from '../../components/Header/Header';
import AdminDashboard from '../../components/Dashboard/AdminDashboard';
import Footer from '../../components/Footer/Footer';
import './AdminPage.css';

const AdminPage = () => {
  return (
    <div className="admin-page">
      <AdminSidebar />
      <div className="main">
        <Header />
        <AdminDashboard />
        <Footer />
      </div>
    </div>
  );
};

export default AdminPage;