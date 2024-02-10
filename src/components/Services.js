import React, { useState, useEffect } from "react";
import '../style/services.css';
import Blank from '../style/blank.png';

export default function DisplayServices({lang}) {

    const [windowWidth, setWindowWidth] = useState(true);

    useEffect(() => {
        if (window.innerWidth <= 740) {
            console.log(window.innerWidth, windowWidth)
            setWindowWidth(false);
        } else {
            //console.log(window.innerWidth, windowWidth)
            setWindowWidth(true);
        }
    }, [windowWidth]);

    const data = [1, 2, 3, 4];
    const imgData1 = [1, 2, 3, 4, 5, 6];
    const imgData2 = [1, 2, 3, 4, 5, 6];
    const imgData3 = [1, 2, 3, 4, 5, 6];
    const imgData4 = [1, 2, 3, 4, 5, 6];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImgIndex1, setCurrentImgIndex1] = useState(0);
    const [currentImgIndex2, setCurrentImgIndex2] = useState(0);
    const [currentImgIndex3, setCurrentImgIndex3] = useState(0);
    const [currentImgIndex4, setCurrentImgIndex4] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    }

    const nextImgSlide = (service) => {
        if (service === 1) {
            setCurrentImgIndex1((prevImgIndex) => (prevImgIndex + 1) % imgData1.length);
        } else if (service === 2) {
            setCurrentImgIndex2((prevImgIndex) => (prevImgIndex + 1) % imgData2.length);
        } else if (service === 3) {
            setCurrentImgIndex3((prevImgIndex) => (prevImgIndex + 1) % imgData3.length);
        } else if (service === 4) {
            setCurrentImgIndex4((prevImgIndex) => (prevImgIndex + 1) % imgData4.length);
        } else if (service === 5) {
            setCurrentImgIndex4((prevImgIndex) => (prevImgIndex + 1) % imgData4.length);
        } else if (service === 6) {
            setCurrentImgIndex4((prevImgIndex) => (prevImgIndex + 1) % imgData4.length);
        }

        // setCurrentImgIndex((prevImgIndex) => (prevImgIndex + 1) % imgData.length);
    }

    const prevImgSlide = (service) => {
        if (service === 1) {
            setCurrentImgIndex1((prevImgIndex) => (prevImgIndex + 1) % imgData1.length);
        } else if (service === 2) {
            setCurrentImgIndex2((prevImgIndex) => (prevImgIndex + 1) % imgData2.length);
        } else if (service === 3) {
            setCurrentImgIndex3((prevImgIndex) => (prevImgIndex + 1) % imgData3.length);
        } else if (service === 4) {
            setCurrentImgIndex4((prevImgIndex) => (prevImgIndex + 1) % imgData4.length);
        } else if (service === 5) {
            setCurrentImgIndex4((prevImgIndex) => (prevImgIndex + 1) % imgData4.length);
        } else if (service === 6) {
            setCurrentImgIndex4((prevImgIndex) => (prevImgIndex + 1) % imgData4.length);
        }
        // setCurrentImgIndex((prevImgIndex) => (prevImgIndex - 1 + imgData.length) % imgData.length);
    }

    console.log(windowWidth)
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
                                { windowWidth ? 
                                    <>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                    </>
                                    :
                                    <div className="carousel-img-container">
                                        <div className="carousel-img-wrapper" style={{ transform: `translateX(${-currentImgIndex1 * 100}%)` }}>
                                            <div className="carousel-img-item" key={0}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={1}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={2}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={3}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={4}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={5}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                        </div>
                                        <button className="carousel-img-prev" onClick={()=>prevImgSlide(1)}>
                                            &lt;
                                        </button>
                                        <button className="carousel-img-next" onClick={()=>nextImgSlide(1)}>
                                            &gt;
                                        </button>
                                    </div>

                                }
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
                                { windowWidth ? 
                                    <>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                    </>
                                    :
                                    <div className="carousel-img-container">
                                        <div className="carousel-img-wrapper" style={{ transform: `translateX(${-currentImgIndex2 * 100}%)` }}>
                                            <div className="carousel-img-item" key={0}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={1}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={2}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={3}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={4}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={5}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                        </div>
                                        <button className="carousel-img-prev" onClick={()=>prevImgSlide(2)}>
                                            &lt;
                                        </button>
                                        <button className="carousel-img-next" onClick={()=>nextImgSlide(2)}>
                                            &gt;
                                        </button>
                                    </div>

                                }
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
                                { windowWidth ? 
                                    <>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                    </>
                                    :
                                    <div className="carousel-img-container">
                                        <div className="carousel-img-wrapper" style={{ transform: `translateX(${-currentImgIndex3 * 100}%)` }}>
                                            <div className="carousel-img-item" key={0}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={1}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={2}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={3}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={4}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={5}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                        </div>
                                        <button className="carousel-img-prev" onClick={()=>prevImgSlide(3)}>
                                            &lt;
                                        </button>
                                        <button className="carousel-img-next" onClick={()=>nextImgSlide(3)}>
                                            &gt;
                                        </button>
                                    </div>

                                }
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
                                { windowWidth ? 
                                    <>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                        <img src={Blank} alt="Example of the service"/>
                                    </>
                                    :
                                    <div className="carousel-img-container">
                                        <div className="carousel-img-wrapper" style={{ transform: `translateX(${-currentImgIndex4 * 100}%)` }}>
                                            <div className="carousel-img-item" key={0}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={1}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={2}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={3}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={4}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                            <div className="carousel-img-item" key={5}>
                                                <img src={Blank} alt="Example of the service"/>
                                            </div>
                                        </div>
                                        <button className="carousel-img-prev" onClick={()=>prevImgSlide(4)}>
                                            &lt;
                                        </button>
                                        <button className="carousel-img-next" onClick={()=>nextImgSlide(4)}>
                                            &gt;
                                        </button>
                                    </div>

                                }
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

