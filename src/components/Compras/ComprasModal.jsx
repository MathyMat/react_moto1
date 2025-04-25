// components/ComprasModal/ComprasModal.jsx
import React from 'react';
import './ComprasModal.css';

const ComprasModal = ({ compras, onClose }) => {
  return (
    <div className="compras-modal-backdrop" onClick={onClose}>
      <div className="compras-modal" onClick={(e) => e.stopPropagation()}>
        <h2>🛍️ Historial de Compras</h2>
        {compras.length === 0 ? (
          <p className="sin-compras">No has realizado ninguna compra aún.</p>
        ) : (
          <ul className="compras-list">
            {compras.map((compra, index) => (
              <li key={index} className="compra-item">
                <div>
                  <h3>{compra.nombre}</h3>
                  {compra.metodo === 'Financiamiento' ? (
                    <>
                      <p><strong>Método:</strong> Financiamiento</p>
                      <p><strong>Cuotas:</strong> {compra.meses} meses</p>
                      <p><strong>Cuota mensual:</strong> S/. {compra.cuotaMensual}</p>
                      <p><strong>Total a pagar:</strong> S/. {compra.precio.toFixed(2)}</p>
                    </>
                  ) : (
                    <>
                      <p><strong>Método:</strong> Contado</p>
                      <p><strong>Total pagado:</strong> S/. {compra.precio.toFixed(2)}</p>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
        <button className="btn-cerrar" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default ComprasModal;
