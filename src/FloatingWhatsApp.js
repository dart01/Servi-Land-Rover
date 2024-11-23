// FloatingWhatsApp.js
import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa'; // Importing WhatsApp icon

const WhatsAppButton = styled.a`
    position: fixed; /* Fixed position to stay in the same place */
    bottom: 20px; /* Distance from the bottom */
    right: 20px; /* Distance from the right */
    background-color: #25D366; /* WhatsApp green color */
    color: white; /* Icon color */
    border-radius: 60%; /* Circular button */
    padding: 15px; /* Padding around the icon */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Shadow for depth */
    font-size: 24px; /* Icon size */
    text-align: center; /* Center the icon */
    transition: background-color 0.3s; /* Smooth transition for hover effect */

    &:hover {
        background-color: #128C7E; /* Darker green on hover */
    }
`;

const FloatingWhatsApp = () => {
    const whatsappNumber = '+573187407550'; // Replace with your WhatsApp number

    return (
        <WhatsAppButton 
            href={`https://wa.me/${whatsappNumber}`} 
            target="_blank" 
            rel="no"
        >
            <FaWhatsapp />
        </WhatsAppButton>
    );
};

export default FloatingWhatsApp;