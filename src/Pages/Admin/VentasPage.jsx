import React from 'react';
import { Routes } from 'react-router-dom';

const VentasPage = () => {
  return (

      <div className="page"><section className="top-section">
        <div className="card">0 cant.<br/><span>PARA EMPACAR</span></div>
        <div className="card">0 cant.<br/><span>PARA SER ENVIADO</span></div>
        <div className="card">0 cant.<br/><span>PARA SER ENTREGADO</span></div>
        <div className="card">0 cant.<br/><span>PARA FACTURAR</span></div>
        <div className="summary">
          <div>CANTIDAD EN MANO<br/>0</div>
          <div>CANTIDAD A RECIBIR<br/>0</div>
        </div>
      </section>

      <section className="product-details">
        <div className="details">
          <p>Artículos con bajo stock: 0</p>
          <p>Artículos sin confirmar: 0</p>
          <p>Todos los artículos: 0</p>
        </div>
        <div className="pie-chart">0%</div>
        <div className="top-selling">
          <p>Artículos más vendidos</p>
          <div className="items">
            <div>🧥 0 pcs</div>
            <div>👕 0 sets</div>
          </div>
        </div>
      </section>

      <section className="orders">
        <div className="purchase">
          <h4>Orden de compra</h4>
          <p>Cantidad pedida: 0</p>
        </div>
        <div className="sales">
          <h4>Orden de venta</h4>
          <p>Borrador: 0, Confirmado: 0</p>
        </div>
      </section>
      </div>
      );
};

export default VentasPage;