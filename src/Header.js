// Header.js
import React, { useEffect, useState } from 'react';
import './Header.css'; // Importa el archivo CSS
import logo from './imagenes/logo.png'; 

const Header = () => {
    const [isSticky, setSticky] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isSticky ? 'sticky' : ''}`}>
            <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
            <nav className="nav">
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Acerca de</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;