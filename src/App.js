// App.js
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import AboutSection from './AboutSection';
import './App.css';
import Footer from './Footer';
 
const App = () => {
    return (
        <div>
            <Header />
            <MainContent />
            <AboutSection />
            <Footer />
        </div>
    );
};

export default App;
