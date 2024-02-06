import React from "react";
import '../style/aboutus.css';
// import Logo from "../style/logo.png";

export default function DisplayAboutUs({lang}) {
    
    return (
        <div className="aboutus-container" id="aboutus">
            {/* <img src={Logo} alt="Company Logo"/> */}
            {lang ? (
                <div className="aboutus-text-container">
                    <h2>About Us</h2>
                    <p>
                        Greg understood that this situation would make Michael terribly uncomfortable.
                        Michael simply had no idea what was about to come and even though Greg could 
                        prevent it from happening, he opted to let it happen. It was quite ironic, really. 
                    </p>
                </div>
                ) : (
                    <div className="aboutus-text-container">
                    <h2>Sobre Nosotros</h2>
                     <p>
                         Greg entendió que esta situación haría que Michael se sintiera terriblemente incómodo.
                         Michael simplemente no tenía idea de lo que estaba por venir y aunque Greg podía
                         impedir que sucediera, optó por dejar que sucediera. Fue bastante irónico, de verdad.
                     </p>
                </div>
                )
            }
        </div>
    )
}

