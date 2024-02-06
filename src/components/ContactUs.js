import React from "react";
import '../style/contactus.css';
import { BiLogoWhatsapp, BiMailSend, BiLogoFacebookSquare, BiLogoTiktok } from 'react-icons/bi';

export default function DisplayContactUs({lang}) {
    
    return (
        <header className="contactus-container" id="contactus">
            {lang ? (
                    <>
                        <h2>Contact Us</h2>
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
                                    Facebook Profile
                                </p>
                            </div>
                            <div className="logo-info-container">
                                <BiLogoTiktok className="contact-logo"/>
                                <p>
                                    TikTok Profile
                                </p>
                            </div>
                        </div>
                    </>
                    ) : (
                    <>
                        <h2>Contáctanos</h2>
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
                                    Perfil de Facebook
                                </p>
                            </div>
                            <div className="logo-info-container">
                                <BiLogoTiktok className="contact-logo"/>
                                <p>
                                    Perfil de TikTok
                                </p>
                            </div>
                        </div>
                    </>
                    )
            }
        </header>
    )
}

