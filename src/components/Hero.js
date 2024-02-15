import React from "react";
import Logo from '../style/logo.png';
import '../style/hero.css';

export default function DisplayHero({lang}) {
    
    return (
        <div className="hero-container" id="hero">
            <img className="img-logo" src={Logo} alt="Company Logo"/>
            {lang ? (
                <div className="hero-text-container">
                    <h1>California Custom Cabinets, Inc.</h1>
                    <h3>Custom. Restore. Fabrication. Cabinet.</h3>
                </div>
                ) :
                (
                <div className="hero-text-container">
                    <h1>California Custom Cabinets, Inc.</h1>
                    <h3>Custom. Restore. Fabrication. Cabinet.</h3>
                </div>
                )
            }
        </div>
    )
}

