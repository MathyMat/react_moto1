import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Catalogo from './pages/Catalogo';
import ContactoModal from './components/Contacto/ContactoModal';
import ComprasModal from './components/Compras/ComprasModal';
import MotoChatbot from './components/MotoChatbot/MotoChatbot';
import { getMotos } from './services/motosService'; // Importamos getMotos
import './App.css';

function App() {
  const [compras, setCompras] = useState([]);
  const [showContacto, setShowContacto] = useState(false);
  const [showCompras, setShowCompras] = useState(false);

  useEffect(() => {
    const comprasGuardadas = JSON.parse(localStorage.getItem('compras')) || [];
    setCompras(comprasGuardadas);
  }, []);

  const agregarCompra = (nuevaCompra) => {
    const nuevasCompras = [...compras, nuevaCompra];
    setCompras(nuevasCompras);
    localStorage.setItem('compras', JSON.stringify(nuevasCompras));
  };

  const handleShowContacto = () => {
    setShowContacto(true);
  };

  const handleCloseContacto = () => {
    setShowContacto(false);
  };

  const handleShowCompras = () => {
    setShowCompras(true);
  };

  const handleCloseCompras = () => {
    setShowCompras(false);
  };

  // Puedes reemplazar este array por una llamada a tu backend o a tu estado global
  const motosDisponibles = [
    { nombre: 'Yamaha R3', descripcion: 'Deportiva y potente', precio: 18000 },
    { nombre: 'Honda CB190', descripcion: 'Ideal para ciudad', precio: 13000 },
    { nombre: 'Suzuki Gixxer', descripcion: 'Económica y confiable', precio: 11000 },
  ];

  return (
    <div className="App">
      <Header 
        onShowContacto={handleShowContacto} 
        onShowCompras={handleShowCompras} 
      />
      <main>
        <Catalogo 
          compras={compras} 
          agregarCompra={agregarCompra} 
        />
        {showContacto && <ContactoModal onClose={handleCloseContacto} />}
        {showCompras && <ComprasModal compras={compras} onClose={handleCloseCompras} />}
      </main>
      <Footer />
      
      {/* 🧠 Chatbot en la esquina */}
      <MotoChatbot motos={getMotos()} /> {/* Pasamos las motos como prop */}
    </div>
  );
}

export default App;
