// src/services/motosService.js

export const motos = {
  r15: {
    id: 'r15',
    nombre: "Yamaha R15 V4",
    precio: 20000,
    descripcion: "Moto deportiva, 155cc, ideal para ciudad y carretera.",
    imagen: "https://yamahanic.com/wp-content/uploads/2023/11/R-15-V4-Profile-Yamaha-CP.jpg",
    videoUrl: "https://www.youtube.com/embed/B1QWfiXEPAg", // Cambia TU_VIDEO_ID por el ID real
    especificaciones: {
      cilindrada: "155 cc",
      potencia: "18.6 HP",
      torque: "14.2 Nm",
      transmision: "6 velocidades",
      peso: "142 kg"
    }
  },
  r3: {
    id: 'r3',
    nombre: "Yamaha R3",
    precio: 35000,
    descripcion: "Moto deportiva de 321cc, rendimiento superior y diseño agresivo.",
    imagen: "https://lucero.com.pe/wp-content/uploads/2022/08/1-28.png",
    videoUrl: "https://www.youtube.com/embed/jDKsTrA3ohg", // Cambia TU_VIDEO_ID por el ID real
    especificaciones: {
      cilindrada: "321 cc",
      potencia: "42 HP",
      torque: "29.6 Nm",
      transmision: "6 velocidades",
      peso: "169 kg"
    }
  },
  cb190: {
    id: 'cb190',
    nombre: "Honda CB190R",
    precio: 18000,
    descripcion: "Moto naked de 184cc, versátil y eficiente para uso diario.",
    imagen: "https://motos0km.com.ar/models/honda-cb-190-r-gallery-a00e12-020180507194932.jpg",
    videoUrl: "https://www.youtube.com/embed/LxuUChmb6TY", // Cambia TU_VIDEO_ID por el ID real
    especificaciones: {
      cilindrada: "184 cc",
      potencia: "16.7 HP",
      torque: "16 Nm",
      transmision: "5 velocidades",
      peso: "142 kg"
    }
  },
  mt03: {
    id: 'mt03',
    nombre: "Yamaha MT-03",
    precio: 34000,
    descripcion: "Naked urbana de 321cc con diseño agresivo y excelente maniobrabilidad.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Q-nS1aeDj5k2Cx426xWZzVSV-EdOGIehmg&s",
    videoUrl: "https://www.youtube.com/embed/6m8p38irAd0", // Cambia TU_VIDEO_ID por el ID real
    especificaciones: {
      cilindrada: "321 cc",
      potencia: "42 HP",
      torque: "29.6 Nm",
      transmision: "6 velocidades",
      peso: "168 kg"
    }
  },
  duke200: {
    id: 'duke200',
    nombre: "KTM Duke 200",
    precio: 27000,
    descripcion: "Moto naked deportiva de 200cc, ligera y potente.",
    imagen: "https://socopur.com.pe/wp-content/uploads/2024/09/aa4eaffb-4de0-4e81-a3d9-c5dc8e637367.png",
    videoUrl: "https://www.youtube.com/embed/GaLNWxHjIKY", // Cambia TU_VIDEO_ID por el ID real
    especificaciones: {
      cilindrada: "199.5 cc",
      potencia: "25 HP",
      torque: "19.5 Nm",
      transmision: "6 velocidades",
      peso: "139 kg"
    }
  },
  gixxer: {
    id: 'gixxer',
    nombre: "Suzuki Gixxer 150",
    precio: 16500,
    descripcion: "Moto de 155cc, estilo moderno, ideal para el uso urbano.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1zsskSTWuq9PlDxlreSXXdctkj9aq8114w&s",
    videoUrl: "https://www.youtube.com/embed/C_NG5Wsm6uo", // Cambia TU_VIDEO_ID por el ID real
    especificaciones: {
      cilindrada: "155 cc",
      potencia: "14.8 HP",
      torque: "14 Nm",
      transmision: "5 velocidades",
      peso: "136 kg"
    }
  },
  fz25: {
    id: 'fz25',
    nombre: "Yamaha FZ25",
    precio: 29000,
    descripcion: "Moto robusta de 249cc, eficiente para ciudad y carretera.",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0lE6yWXBtVlUF0Ehs3_2MQY51Zv4moMfJg&s",
    videoUrl: "https://www.youtube.com/embed/pjKZXP8hiuM", // Cambia TU_VIDEO_ID por el ID real
    especificaciones: {
      cilindrada: "249 cc",
      potencia: "20.9 HP",
      torque: "20.1 Nm",
      transmision: "5 velocidades",
      peso: "148 kg"
    }
  },
  pulsarNS200: {
    id: 'pulsarNS200',
    nombre: "Pulsar NS200",
    precio: 25000,
    descripcion: "Moto deportiva de 199cc, con buen rendimiento y estilo agresivo.",
    imagen: "https://pulsar.pe/storage/app/uploads/public/667/ae6/644/667ae6644e315441131372.webp",
    videoUrl: "https://www.youtube.com/embed/tl77YtGHBfY", // Cambia TU_VIDEO_ID por el ID real
    especificaciones: {
      cilindrada: "199.5 cc",
      potencia: "24.5 HP",
      torque: "18.74 Nm",
      transmision: "6 velocidades",
      peso: "152 kg"
    }
  },
  apache160: {
    id: 'apache160',
    nombre: "TVS Apache 160",
    precio: 17500,
    descripcion: "Moto de 159cc, excelente combinación de estilo, potencia y eficiencia.",
    imagen: "https://tvsperu.com/wp-content/uploads/2024/02/RED-1604V-Flat-AZUL-1024x709.png",
    videoUrl: "https://www.youtube.com/embed/yyX3ND_iv1s", // Cambia TU_VIDEO_ID por el ID real
    especificaciones: {
      cilindrada: "159.7 cc",
      potencia: "16.8 HP",
      torque: "14.8 Nm",
      transmision: "5 velocidades",
      peso: "137 kg"
    }
  }
};

// Función para obtener todas las motos
export const getMotos = () => {
  return Object.values(motos);
};

// Función para buscar una moto por ID
export const getMotoById = (id) => {
  return motos[id] || null;
};

// Función para calcular precio con descuento
export const calcularPrecioConDescuento = (precioOriginal, descuento = 0.3) => {
  return precioOriginal * (1 - descuento);
};

// Función para calcular cuotas mensuales
export const calcularCuotaMensual = (precio, meses, interes = 0) => {
  if (meses <= 0) return 0;
  const precioConInteres = precio * (1 + interes);
  return precioConInteres / meses;
};
