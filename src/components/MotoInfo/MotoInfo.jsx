// components/MotoInfo/MotoInfo.jsx
import React, { useState } from 'react';
import './MotoInfo.css';

const MotoInfo = ({ moto, agregarCompra, onClose }) => {
  const [meses, setMeses] = useState(12);
  const [cuota, setCuota] = useState(0);
  const [dni, setDni] = useState('');
  const [dniValido, setDniValido] = useState(true);

  const calcularCuota = () => {
    if (meses <= 0) {
      alert("El número de meses debe ser mayor a 0.");
      return;
    }
    const precioConDescuento = moto.precio * 0.7;
    setCuota(precioConDescuento / meses);
  };

  const validarDni = () => {
    const regex = /^[0-9]{8}$/;
    if (!regex.test(dni)) {
      setDniValido(false);
      return false;
    }
    setDniValido(true);
    return true;
  };

  const financiarCompra = () => {
    if (!validarDni()) {
      alert('Por favor, ingrese un DNI válido.');
      return;
    }
    if (meses <= 0) {
      alert("El número de meses debe ser mayor a 0.");
      return;
    }

    const precioConDescuento = moto.precio * 0.7;
    const nuevaCompra = {
      nombre: moto.nombre,
      precio: precioConDescuento,
      metodo: 'Financiamiento',
      meses,
      cuotaMensual: (precioConDescuento / meses).toFixed(2),
      dni,
    };

    const comprasGuardadas = JSON.parse(localStorage.getItem('compras')) || [];
    comprasGuardadas.push(nuevaCompra);
    localStorage.setItem('compras', JSON.stringify(comprasGuardadas));

    agregarCompra(nuevaCompra);
    alert('Compra financiada con éxito');
  };

  const comprarAlContado = () => {
    if (!validarDni()) {
      alert('Por favor, ingrese un DNI válido.');
      return;
    }

    const nuevaCompra = {
      nombre: moto.nombre,
      precio: moto.precio,
      meses: 1,
      metodo: 'Contado',
      cuotaMensual: moto.precio.toFixed(2),
      dni,
    };

    const comprasGuardadas = JSON.parse(localStorage.getItem('compras')) || [];
    comprasGuardadas.push(nuevaCompra);
    localStorage.setItem('compras', JSON.stringify(comprasGuardadas));

    agregarCompra(nuevaCompra);
    alert('Compra realizada al contado');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="info-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          maxWidth: '90%',
          margin: 'auto',
          background: '#fff',
          padding: '20px',
          borderRadius: '10px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video a la izquierda */}
        <div style={{ flex: 1 }}>
          {moto.videoUrl && (
            <div className="video-container">
              <h3>Video de la moto</h3>
              <iframe
                width="100%"
                height="315"
                src={moto.videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>

        {/* Información a la derecha */}
        <div style={{ flex: 1 }}>
          <button className="close-button" onClick={onClose}>X</button>

          <h2>{moto.nombre}</h2>
          <p>{moto.descripcion}</p>
          <p><strong>Precio original:</strong> S/. {moto.precio.toFixed(2)}</p>
          <p><strong>Precio con descuento SENATI (30%):</strong> S/. {(moto.precio * 0.7).toFixed(2)}</p>

          <h3>Opciones de compra</h3>

          {cuota > 0 && (
            <div className="resultado-cuota">
              <p><strong>Cuota mensual por {meses} meses:</strong> S/. {cuota.toFixed(2)}</p>
            </div>
          )}

          <div className="formulario-dni">
            <label htmlFor="dni">DNI: </label>
            <input
              type="text"
              id="dni"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              style={{
                borderColor: dniValido ? '#ccc' : 'red',
                transition: 'border-color 0.3s ease',
              }}
            />
            {!dniValido && <p className="error-text">El DNI debe tener 8 números.</p>}
          </div>

          <div className="formulario-meses">
            <label htmlFor="meses">Financiar en meses: </label>
            <input
              type="number"
              id="meses"
              min="1"
              value={meses}
              onChange={(e) => setMeses(Number(e.target.value))}
            />
          </div>

          <div className="button-container">
            <button className="btn-contado" onClick={comprarAlContado}>
              Comprar al contado
            </button>
            <button className="btn-calcular" onClick={calcularCuota}>
              Calcular cuota
            </button>
            <button className="btn-financiar" onClick={financiarCompra}>
              Financiar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotoInfo;
