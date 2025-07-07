import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const EmployeeSidebar = () => {

  return (
    <aside className="sidebar">
      <div className="logo">👷 Empleado</div>
      <nav>
        <NavLink to="/employee" end className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
        <NavLink to="/employee/mi-panel" className={({ isActive }) => isActive ? "active" : ""}>Mi Panel</NavLink>
        <NavLink to="/employee/mis-tareas" className={({ isActive }) => isActive ? "active" : ""}>Mis tareas</NavLink>
        <NavLink to="/employee/soporte" className={({ isActive }) => isActive ? "active" : ""}>Soporte</NavLink>
        <NavLink to="/employee/configuracion" className={({ isActive }) => isActive ? "active" : ""}>Configuración</NavLink>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Salir</NavLink>
      </nav>
    </aside>
  );
};

export default EmployeeSidebar;
