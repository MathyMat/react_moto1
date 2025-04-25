import React from 'react';
import './ContactoModal.css';  // Aquí puedes poner el estilo de tu modal

const ContactoModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Datos de Contacto</h2>
        <p>Teléfono: (01)7160250</p>
        <p>Email: contacto@senati.edu.pe</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default ContactoModal;
