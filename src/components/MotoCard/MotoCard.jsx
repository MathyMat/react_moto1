// components/MotoCard/MotoCard.jsx
import React from 'react';
import './MotoCard.css';

const MotoCard = ({ moto, onMostrarInfo }) => {
  return (
    <div 
      className="moto-card" 
      onClick={() => onMostrarInfo(moto)} // Usamos onClick de React
    >
      <img src={moto.imagen} alt={moto.nombre} />
      <h2>{moto.nombre}</h2>
    </div>
  );
};

export default MotoCard;