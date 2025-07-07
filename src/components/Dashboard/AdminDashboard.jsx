import React from 'react';
import './Dashboard.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import VentasPage from '../../Pages/Admin/VentasPage';
import ComprasPage from '../../Pages/Admin/ComprasPage';

const AdminDashboard = () => {
  return (
    <main className="dashboard">
      <Routes>
        <Route path="/" element={<VentasPage/>} />
        <Route path="/compras" element={<ComprasPage/>} />
      </Routes>
    </main>
  );
};

export default AdminDashboard;
