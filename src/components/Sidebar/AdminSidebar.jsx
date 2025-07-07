import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const AdminSidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">📦 <strong>Administrador</strong></div>
      <nav>
        <NavLink to="/admin" end className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
        <NavLink to="/admin/ventas" className={({ isActive }) => isActive ? "active" : ""}>Ventas</NavLink>
        <NavLink to="/admin/compras" className={({ isActive }) => isActive ? "active" : ""}>Compras</NavLink>
        <NavLink to="/admin/insumos" className={({ isActive }) => isActive ? "active" : ""}>Agregar insumos</NavLink>
        <NavLink to="/admin/reportes" className={({ isActive }) => isActive ? "active" : ""}>Reportes</NavLink>
        <NavLink to="/admin/configuracion" className={({ isActive }) => isActive ? "active" : ""}>Configuración</NavLink>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Salir</NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
