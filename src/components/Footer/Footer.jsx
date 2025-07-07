import React from 'react';
import './Footer.css';

export default function Footer() {
  const links = [
    "Inicio",
    "Contacto",
    "Soporte",
    "Acerca de",
    "Desarrolladores",
    "Términos de servicio",
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-links">
          {links.map((item, i) => (
            <span key={i} className="footer-link-item">
              <a href="#">{item}</a>
              {i < links.length - 1 && (
                <span className="footer-divider">|</span>
              )}
            </span>
          ))}
        </div>

        <div className="footer-copy">
          © 2025, Inventorying and counting. Todos los derechos reservados.
        </div>

        <div className="footer-lang">
          <span className="footer-lang-icon">🌐</span>
          Español (Latinoamérica)
        </div>
      </div>
    </footer>
  );
}
