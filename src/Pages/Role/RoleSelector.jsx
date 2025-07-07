import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelector.css';

const RoleSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="role-selector">
      <h1>Selecciona un rol</h1>
      <div className="buttons">
        <button onClick={() => navigate('/admin')}>Administrador</button>
        <button onClick={() => navigate('/employee')}>Empleado</button>
      </div>
    </div>
  );
};

export default RoleSelector;
