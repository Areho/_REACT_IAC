import React from 'react';
import './Dashboard.css';

const EmployeeDashboard = () => {
  return (
    <main className="dashboard">
      <section className="top-section">
        <div className="card">0 tareas<br/><span>PENDIENTE</span></div>
        <div className="card">0 tareas<br/><span>EN PROGRESO</span></div>
        <div className="card">0 paquetes<br/><span>PARA SER ENTREGADO</span></div>
        <div className="card">0 dias<br/><span>HASTA LA PRÓXIMA EVALUACIÓN</span></div>
        <div className="summary">
          <div>ARTÍCULOS ASIGNADOS<br/>0</div>
          <div>ARTÍCULOS QUE QUEDAN<br/>0</div>
        </div>
      </section>

      <section className="product-details">
        <div className="details">
          <p>Reseñas pendientes: 0</p>
          <p>Devoluciones en proceso: 0</p>
        </div>
        <div className="pie-chart">0%</div>
        <div className="top-selling">
          <p>Elementos asignados</p>
          <div className="items">
            <div>📦 22 unidades</div>
            <div>📦 18 unidades</div>
          </div>
        </div>
      </section>

      <section className="orders">
        <div className="purchase">
          <h4>Tareas de hoy</h4>
          <p>Completado: 0 / 0</p>
        </div>
        <div className="sales">
          <h4>Comunicados</h4>
          <p>Mensajes pendientes: 3</p>
        </div>
      </section>
    </main>
  );
};

export default EmployeeDashboard;