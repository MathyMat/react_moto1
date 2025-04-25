import React from 'react';
import './Header.css';

const Header = ({ onShowContacto, onShowCompras }) => {
  return (
    <header className="navbar">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Senati_Per%C3%BA_logo.svg/1200px-Senati_Per%C3%BA_logo.svg.png" 
        alt="Logo SENATI" 
      />
      <nav>
        <a href="#contacto" onClick={onShowContacto}>Contacto</a>
        <a href="#compras" onClick={onShowCompras}>Compras</a>  {/* Nuevo botón "Compras" */}
      </nav>
    </header>
  );
};

export default Header;
