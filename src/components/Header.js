import React from "react";
import '../style/header.css';

export default function DisplayHeader({lang, setLang}) {
    
    const handleClick = () => {
        if (lang) {
            console.log(lang);
            setLang(false);
        } else {
            console.log(lang);
            setLang(true);
        }
    }
    return (
        <header className="header-container">
        {lang ? (
            <>
                <h1>
                    <a href="#hero">
                        Romero's Cabinet Service
                    </a>
                </h1>
                <div className="header-links-container">
                    <h2>
                        <a href="#services">
                            Services
                        </a>
                    </h2>
                    <h2>
                        <a href="#aboutus">
                            About Us
                        </a>
                    </h2>
                    <h2>
                        <a href="#contactus">
                            Contact Us
                        </a>
                    </h2>
                    <button class="button-74"  onClick={handleClick}>
                        Español
                    </button>
                </div>
            </>
            ) : (
                <>
                    <h1>
                        <a href="#hero">
                            Servicio de Gabinete de Romero
                        </a>
                    </h1>
                    <div className="header-links-container">
                        <h2>
                            <a href="#services">
                                Servicios
                            </a>
                        </h2>
                        <h2>
                            <a href="#aboutus">
                                Sobre Nosotros
                            </a>
                        </h2>
                        <h2>
                            <a href="#contactus">
                                Contáctanos
                            </a>
                        </h2>
                        <button class="button-74"  onClick={handleClick}>
                            English
                        </button>
                    </div>
                </>
            )
        }
        </header>
    )
}

