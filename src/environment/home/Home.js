import React, { useState, useEffect } from 'react';
import imgSlide1 from '../../assets/images/slide_01.jpg';


const Home = () => {
    useEffect(() => {
        document.title = "Home - Faiz Muazzam";
    });
    return (
        <div className='sectionMain'>
            <div className='container'>
                <div className='sliderNumber'>
                    <h5>
                        01 <span>/</span> <span>04</span>
                    </h5>
                </div>
                <div className='slider'>
                    <div className='bgCircle'>
                        <div className='contentCircle'></div>
                    </div>
                    <div className='sliderInner'>
                        <div className='itemSlider'>
                            <div className='imgSlider'>
                                <img src={imgSlide1} alt="Slide 1" className='img img-fluid' />
                            </div>
                            <div className='caption'>
                                <div className='captionInnner'>
                                    <div className="date">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
