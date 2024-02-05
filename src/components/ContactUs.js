import React from "react";
import '../style/contactus.css';
import { BiLogoWhatsapp, BiMailSend, BiLogoFacebookSquare, BiLogoTiktok } from 'react-icons/bi';

export default function DisplayContactUs({lang}) {
    
    return (
        <header className="contactus-container" id="contactus">
            {lang ? (
                    <>
                        <h1>Contact Us</h1>
                        <div className="contact-info-container">
                            <div className="logo-info-container">
                                <BiLogoWhatsapp className="contact-logo"/>
                                <p>
                                    (324) 234-2341
                                </p>
                            </div>
                            <div className="logo-info-container">
                                <BiMailSend className="contact-logo"/>
                                <p>
                                    sample@gmail.com
                                </p>
                            </div>
                            <div className="logo-info-container">
                                <BiLogoFacebookSquare className="contact-logo"/>
                                <p>
                                    Facebook Profile Link
                                </p>
                            </div>
                            <div className="logo-info-container">
                                <BiLogoTiktok className="contact-logo"/>
                                <p>
                                    TikTok Profile Link
                                </p>
                            </div>
                        </div>
                    </>
                    ) : (
                    <>
                        <h1>Contáctanos</h1>
                        <div className="contact-info-container">
                            <div className="logo-info-container">
                                <BiLogoWhatsapp className="contact-logo"/>
                                <p>
                                    (324) 234-2341
                                </p>
                            </div>
                            <div className="logo-info-container">
                                <BiMailSend className="contact-logo"/>
                                <p>
                                    sample@gmail.com
                                </p>
                            </div>
                            <div className="logo-info-container">
                                <BiLogoFacebookSquare className="contact-logo"/>
                                <p>
                                    Enlace de Perfil de Facebook
                                </p>
                            </div>
                            <div className="logo-info-container">
                                <BiLogoTiktok className="contact-logo"/>
                                <p>
                                    Enlace de Perfil de TikTok
                                </p>
                            </div>
                        </div>
                    </>
                    )
            }
        </header>
    )
}

