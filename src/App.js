import React, { useState } from 'react';
import "./style/app.css";
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Services from './components/Services.js';
import AboutUs from './components/AboutUs.js';
import ContactUs from './components/ContactUs.js';

const  App = () => {

  const [lang, setLang] = useState(true);
  if (lang) {
    document.title = "Romero's Cabinet Service";
  } else {
    document.title = "Servicio de Gabinete de Romero";
  }
  return (
    <div className="body-grid">
      
      <Header 
        lang={lang}
        setLang={setLang}
      />

      <Hero 
        lang={lang}
      />

      <Services 
        lang={lang}
      />

      <AboutUs 
        lang={lang}
      />

      <ContactUs 
        lang={lang}
      />


    </div>
  );
}

export default App;