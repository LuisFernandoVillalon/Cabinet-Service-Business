import React, { useState } from "react";
import '../style/services.css';
import Blank from '../style/blank.png';

export default function DisplayServices({lang}) {

    const data = [1, 2, 3, 4];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    }
    
    return (
        <div className="services-container" id="services">
            <div className="carousel-container">
                <div className="carousel-wrapper" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
                    <div className="carousel-item" key={0}>
                        <div className="service-info-container">
                            <h2>Service 1</h2>
                            <p>A description of what the service is and all the benefits.
                                Maybe the price, materials. Any information that is needed
                                to know how the service is handled.
                            </p>
                        </div>
                        <div>
                            <div className="service-img-container">
                                <img src={Blank} alt="Example of the service"/>
                                <img src={Blank} alt="Example of the service"/>
                                <img src={Blank} alt="Example of the service"/>
                                <img src={Blank} alt="Example of the service"/>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" key={1}>
                        <div className="service-info-container">
                            <h2>Service 2</h2>
                            <p>A description of what the service is and all the benefits.
                                Maybe the price, materials. Any information that is needed
                                to know how the service is handled.
                            </p>
                        </div>
                        <div>
                            <div className="service-img-container">
                                <img src={Blank} alt="Example of the service"/>
                                <img src={Blank} alt="Example of the service"/>
                                <img src={Blank} alt="Example of the service"/>
                                <img src={Blank} alt="Example of the service"/>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" key={2}>
                        <div className="service-info-container">
                            <h2>Service 3</h2>
                            <p>A description of what the service is and all the benefits.
                                Maybe the price, materials. Any information that is needed
                                to know how the service is handled.
                            </p>
                        </div>
                        <div>
                            <div className="service-img-container">
                                <img src={Blank} alt="Example of the service"/>
                                <img src={Blank} alt="Example of the service"/>
                                <img src={Blank} alt="Example of the service"/>
                                <img src={Blank} alt="Example of the service"/>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" key={3}>
                        <div className="service-info-container">
                            <h2>Service 4</h2>
                            <p>A description of what the service is and all the benefits.
                                Maybe the price, materials. Any information that is needed
                                to know how the service is handled.
                            </p>
                        </div>
                        <div>
                            <div className="service-img-container">
                                <img src={Blank} alt="Example of the service"/>
                                <img src={Blank} alt="Example of the service"/>
                                <img src={Blank} alt="Example of the service"/>
                                <img src={Blank} alt="Example of the service"/>
                            </div>
                        </div>
                    </div>
                                    
                    
                </div>
                <button className="carousel-prev" onClick={prevSlide}>
                    &lt;
                </button>
                <button className="carousel-next" onClick={nextSlide}>
                    &gt;
                </button>
            </div>
        </div>
    )
}

