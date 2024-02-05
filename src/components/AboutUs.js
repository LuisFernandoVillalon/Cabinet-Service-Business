import React from "react";
import '../style/aboutus.css';
import Logo from "../style/logo.png";

export default function DisplayAboutUs({lang}) {
    
    return (
        <div className="aboutus-container" id="aboutus">
            <img src={Logo} alt="Company Logo"/>
            {lang ? (
                <div className="aboutus-text-container">
                    <h1>About Us</h1>
                    <p>
                        Greg understood that this situation would make Michael terribly uncomfortable.
                        Michael simply had no idea what was about to come and even though Greg could 
                        prevent it from happening, he opted to let it happen. It was quite ironic, really. 
                        It was something Greg had said he would never wish upon anyone a million times, 
                        yet here he was knowingly letting it happen to one of his best friends. He 
                        rationalized that it would ultimately make Michael a better person and that no 
                        matter how uncomfortable, everyone should experience racism at least once in their lifetime.
                    </p>
                </div>
                ) : (
                    <div className="aboutus-text-container">
                    <h1>Sobre Nosotros</h1>
                    <p>
                        Greg entendió que esta situación haría que Michael se sintiera terriblemente incómodo.
                        Michael simplemente no tenía idea de lo que estaba por venir y aunque Greg podía
                        impedir que sucediera, optó por dejar que sucediera. Fue bastante irónico, de verdad.
                        Era algo que Greg había dicho que nunca le desearía a nadie un millón de veces.
                        sin embargo, aquí estaba él, conscientemente, dejando que le pasara a uno de sus mejores amigos. Él
                        racionalizó que, en última instancia, haría de Michael una mejor persona y que ningún
                        No importa lo incómodo que sea, todo el mundo debería experimentar el racismo al menos una vez en la vida.
                    </p>
                </div>
                )
            }
        </div>
    )
}

