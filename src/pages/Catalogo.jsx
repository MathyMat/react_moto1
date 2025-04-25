// Catalogo.jsx
import React, { useState } from 'react';
import MotoCard from '../components/MotoCard/MotoCard';
import MotoInfo from '../components/MotoInfo/MotoInfo';
import { motos } from '../services/motosService';

const Catalogo = ({ compras, agregarCompra }) => {
  const [motoSeleccionada, setMotoSeleccionada] = useState(null);

  const handleMostrarInfo = (moto) => {
    setMotoSeleccionada(moto);
  };

  const cerrarModal = () => {
    setMotoSeleccionada(null);
  };

  return (
    <div className="catalogo-container">
      <h1 id="catalogo">Catálogo de Motos - SENATI</h1>
      <div className="moto-container">
        {Object.values(motos).map((moto) => (
          <MotoCard 
            key={moto.id}
            moto={moto}
            onMostrarInfo={handleMostrarInfo}
          />
        ))}
      </div>

      {motoSeleccionada && (
        <MotoInfo 
          moto={motoSeleccionada} 
          onClose={cerrarModal}
          agregarCompra={agregarCompra}
        />
      )}
    </div>
  );
};

export default Catalogo;
