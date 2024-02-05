import React from "react";
import Logo from '../style/logo.png';
import '../style/hero.css';

export default function DisplayHero({lang}) {
    
    return (
        <div className="hero-container" id="hero">
            <img className="img-logo" src={Logo} alt="Company Logo"/>
            {lang ? (
                <div className="hero-text-container">
                    <h1>Romero's Cabinet Service</h1>
                    <h3>Restoring Beauty to Every Detail.</h3>
                </div>
                ) :
                (
                <div className="hero-text-container">
                    <h1>Servicio de Gabinete de Romero</h1>
                    <h3>Restaurando la Belleza en Cada Detalle.</h3>
                </div>
                )
            }
        </div>
    )
}

