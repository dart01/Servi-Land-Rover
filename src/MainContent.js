// MainContent.js
import React from 'react';
import './MainContent.css'; // Importa el archivo CSS para estilos
import fondo from './imagenes/traveling2.png'; // Cambia 'tu-imagen.jpg' por el nombre de tu imagen

const MainContent = () => {
    return (
        <div className="main-content" style={{ backgroundImage: `url(${fondo})` }}>
           
        </div>
    );
};

export default MainContent;