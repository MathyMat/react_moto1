import React, { useState } from 'react';
import './MotoChatbot.css';
import { calcularPrecioConDescuento, calcularCuotaMensual } from '../../services/motosService';

const MotoChatbot = ({ motos }) => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola! Soy tu asistente de motos. ¿En qué puedo ayudarte?", sender: 'bot' }
  ]);
  const [selectedMonths, setSelectedMonths] = useState(12);

  const addMessage = (text, sender = 'bot', options = null) => {
    setMessages(prev => [...prev, {
      id: Date.now(),
      text,
      sender,
      options
    }]);
  };

  const handleOptionClick = (option) => {
    if (typeof option === 'function') {
      option();
    } else if (typeof option === 'string') {
      handleQuestionClick(option);
    }
  };

  const handleQuestionClick = (question) => {
    // Agregar pregunta del usuario
    addMessage(question, 'user');

    // Procesar respuesta
    setTimeout(() => {
      if (question.includes('modelos') || question === 'Modelos') {
        showMotosList();
      } else if (question.includes('descuento') || question === 'Descuentos') {
        showDiscountOptions();
      } else if (question.includes('financiación') || question.includes('cuotas') || question === 'Financiación') {
        showInstallmentOptions();
      } else {
        showMainMenu();
      }
    }, 300);
  };

  const showMainMenu = () => {
    addMessage("¿En qué más puedo ayudarte?", 'bot', [
      { text: "🏍️ Ver modelos", action: () => handleQuestionClick("Modelos") },
      { text: "💲 Descuentos", action: () => handleQuestionClick("Descuentos") },
      { text: "🔄 Financiación", action: () => handleQuestionClick("Financiación") }
    ]);
  };

  const showMotosList = () => {
    addMessage("Estos son nuestros modelos disponibles:", 'bot', 
      motos.map(moto => ({
        text: moto.nombre,
        action: () => showMotoDetails(moto)
      }))
    );
  };

  const showMotoDetails = (moto) => {
    const details = (
      <div className="moto-details">
        <h4>{moto.nombre}</h4>
        <img src={moto.imagen} alt={moto.nombre} className="moto-image" />
        <p><strong>Precio:</strong> S/ {moto.precio.toLocaleString('es-PE')}</p>
        <p className="moto-description">{moto.descripcion}</p>
        <div className="specs">
          <h5>Especificaciones:</h5>
          <ul>
            {Object.entries(moto.especificaciones).map(([key, value]) => (
              <li key={key}><strong>{key}:</strong> {value}</li>
            ))}
          </ul>
        </div>
      </div>
    );

    addMessage(details, 'bot', [
      { text: "📽️ Ver video", action: () => showVideo(moto) },
      { text: "💲 Calcular descuento", action: () => showDiscount(moto) },
      { text: "🔄 Calcular cuotas", action: () => showInstallments(moto) },
      { text: "↩️ Volver", action: () => showMotosList() }
    ]);
  };

  const showVideo = (moto) => {
    const video = (
      <div className="video-container">
        <iframe
          src={moto.videoUrl}
          title={`Video de ${moto.nombre}`}
          allowFullScreen
        ></iframe>
      </div>
    );

    addMessage(video, 'bot', [
      { text: "🔙 A detalles", action: () => showMotoDetails(moto) },
      { text: "🏠 Menú principal", action: () => showMainMenu() }
    ]);
  };

  const showDiscountOptions = () => {
    addMessage("Selecciona un modelo para ver su descuento:", 'bot',
      motos.map(moto => ({
        text: moto.nombre,
        action: () => showDiscount(moto)
      }))
    );
  };

  const showDiscount = (moto) => {
    const discountPrice = calcularPrecioConDescuento(moto.precio);
    const discountInfo = (
      <div className="discount-info">
        <h4>{moto.nombre}</h4>
        <p><strong>Precio regular:</strong> S/ {moto.precio.toLocaleString('es-PE')}</p>
        <p className="discount-text"><strong>¡30% DE DESCUENTO!</strong></p>
        <p><strong>Nuevo precio:</strong> S/ {discountPrice.toLocaleString('es-PE')}</p>
        <p><strong>Ahorras:</strong> S/ {(moto.precio - discountPrice).toLocaleString('es-PE')}</p>
      </div>
    );

    addMessage(discountInfo, 'bot', [
      { text: "🔄 Calcular cuotas", action: () => showInstallments(moto) },
      { text: "🔙 A detalles", action: () => showMotoDetails(moto) },
      { text: "🏠 Menú principal", action: () => showMainMenu() }
    ]);
  };

  const showInstallmentOptions = () => {
    addMessage("Selecciona un modelo para calcular cuotas:", 'bot',
      motos.map(moto => ({
        text: moto.nombre,
        action: () => showInstallments(moto)
      }))
    );
  };

  const showInstallments = (moto) => {
    const installmentInfo = (
      <div className="installment-info">
        <h4>{moto.nombre}</h4>
        <p><strong>Precio:</strong> S/ {moto.precio.toLocaleString('es-PE')}</p>
        <div className="installment-controls">
          <label>
            <strong>Plazo:</strong>
            <select
              value={selectedMonths}
              onChange={(e) => {
                setSelectedMonths(parseInt(e.target.value));
                showInstallments(moto); // Vuelve a renderizar con los nuevos meses
              }}
            >
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="18">18 meses</option>
              <option value="24">24 meses</option>
            </select>
          </label>
          <p><strong>Cuota mensual:</strong> S/ {calcularCuotaMensual(moto.precio, selectedMonths).toLocaleString('es-PE')}</p>
        </div>
      </div>
    );

    addMessage(installmentInfo, 'bot', [
      { text: "💲 Ver descuento", action: () => showDiscount(moto) },
      { text: "🔙 A detalles", action: () => showMotoDetails(moto) },
      { text: "🏠 Menú principal", action: () => showMainMenu() }
    ]);
  };

  return (
    <div className={`chatbot-container ${showChatbot ? 'open' : ''}`}>
      <button 
        className="chatbot-toggle" 
        onClick={() => setShowChatbot(!showChatbot)}
      >
        {showChatbot ? '×' : '💬'}
      </button>
      
      {showChatbot && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Asistente de Motos</h3>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                <div className="message-content">
                  {typeof msg.text === 'string' ? msg.text : msg.text}
                </div>
                {msg.options && (
                  <div className="message-options">
                    {msg.options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOptionClick(option.action)}
                        className="option-button"
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {messages.length === 1 && (
            <div className="initial-options">
              <button onClick={() => handleQuestionClick("Modelos")} className="option-button">
                🏍️ Ver modelos
              </button>
              <button onClick={() => handleQuestionClick("Descuentos")} className="option-button">
                💲 Descuentos
              </button>
              <button onClick={() => handleQuestionClick("Financiación")} className="option-button">
                🔄 Financiación
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MotoChatbot;