import React, { useState, useEffect, Fragment, useRef } from 'react';


import { Icon } from '@iconify/react'; import OverlayArrow from '../../components/OverlayArrow';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Parallax, Autoplay, Mousewheel, EffectFade, Pagination } from "swiper";


import 'swiper/css';
import 'swiper/css/bundle'


import RightBarHome from '../../components/RightBarHome';
import { event, get } from 'jquery';

import imgSlide1 from '../../assets/images/slide_01.jpg';
import imgSlide2 from '../../assets/images/slide_02.jpg';
import imgSlide3 from '../../assets/images/slide_03.jpg';
import imgSlide4 from '../../assets/images/slide_04.jpg';

const Home = () => {

    const arrSlider = [
        {
            id: 1,
            image: imgSlide1,
            intro: 'Welcome to my Website',
            title:
                <Fragment>
                    Faiz Muazzam - <br />
                    WEB <span>Front End </span> Developer <br />
                    form <span>Indonesia</span>
                </Fragment>,
            content: 'Praesent eu massa vel diam laoreet elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec volutpat porta risus posuere imperdiet. ',
            infoLink: 'My Portofolio'
        },
        {
            id: 2,
            image: imgSlide2,
            intro: 'Welcome to my Website',
            title:
                <Fragment>
                    Imam Huzaini - <br />
                    WEB <span>Back End End </span> Developer <br />
                    form <span>Indonesia</span>
                </Fragment>,
            content: 'Praesent eu massa vel diam laoreet elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec volutpat porta risus posuere imperdiet. ',
            infoLink: 'My Portofolio'
        },
        {
            id: 3,
            image: imgSlide3,
            intro: 'Welcome to my Website',
            title:
                <Fragment>
                    Naufal Shultonul Aziz - <br />
                    WEB <span>Senior </span>Admin  <br />
                    form <span>Indonesia</span>
                </Fragment>,
            content: 'Praesent eu massa vel diam laoreet elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec volutpat porta risus posuere imperdiet. ',
            infoLink: 'My Portofolio'
        },
        {
            id: 4,
            image: imgSlide4,
            intro: 'Welcome to my Website',
            title:
                <Fragment>
                    Aji Sampurno - <br />
                    Traineer <span>Front End </span> Developer <br />
                    form <span>Indonesia</span>
                </Fragment>,
            content: 'Praesent eu massa vel diam laoreet elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec volutpat porta risus posuere imperdiet. ',
            infoLink: 'My Portofolio'
        },
    ]

    // UseState
    const [dataSlide, setSataSlide] = useState(arrSlider);
    const [indexActive, setIndexActive] = useState(0);
    const [sliderProgress, setSliderProgress] = useState(0);
    const [indicator, setIndicator] = useState(0);
    const [iSwipper, setiSwipper] = useState(null);
    const [iSwipperCaption, setiSwipperCaption] = useState(null);
    const [iSwipperNumber, setiSwipperNumber] = useState(null);
    const [playSlider, setPlaySlider] = useState(true);
    const [sliderOn, setSliderOn] = useState(false);
    // const [iSwipperCaption, setiSwipper] = useState(null);


    // UseRef
    const slider = useRef();
    const wheelsElement = useRef();
    const navigationPrevRef = useRef();
    const navigationNextRef = useRef();
    const elIndicator = useRef([]);

    // Method
    const onAutoplayTimeLeft = (s, time, progress) => {
        setSliderProgress(1 - progress)
    };


    const actionIndiicator = (id) => {
        iSwipper.slideTo(id)
        iSwipperCaption.slideTo(id)
        iSwipperNumber.slideTo(id)
    }

    const actionStopSlider = () => {
        setPlaySlider(!playSlider);
        if (playSlider) {
            iSwipperCaption.autoplay.pause();
        } else {
            iSwipperCaption.autoplay.resume();
        }
    }


    // Data options slider
    const HeroSliderConfigs = {
        modules: [Navigation, Parallax, Autoplay, Mousewheel, Pagination],
        parallax: true,
        loop: true,
        // navigation: {
        //     nextEl: '.navControls .next',
        //     prevEl: '.navControls .prev',
        // },
        // // pagination: {
        // //     el: '.controlSlider',
        // //     type: 'bullets',
        // // },
        // mousewheel: {
        //     eventsTarget: '.sectionMain',
        // },
        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: false,
        // },
        autoplay: false,
        speed: 2500,
        spaceBetween: 0,
        effect: "slide",
        onSlideChange: (swiper) => {
            // console.log(indexActive);
            setIndexActive(swiper.realIndex);
        },
        onSwiper: (swiper) => {
            setParallaxSwiper(swiper);
            setiSwipper(swiper);

        }



    };


    const CaptionSliderConfigs = {
        modules: [Navigation, Parallax, Autoplay, Mousewheel],
        // parallax: true,
        allowTouchMove: false,
        loop: true,
        navigation: {
            nextEl: '.navControls .next',
            prevEl: '.navControls .prev',
        },
        mousewheel: {
            eventsTarget: '.sectionMain',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        onSlidePrevTransitionStart: () => {
            iSwipper.slidePrev();
            iSwipperNumber.slidePrev();
        },
        onSlideNextTransitionStart: () => {
            iSwipper.slideNext();
            iSwipperNumber.slideNext();
        },
        onSwiper: (swiper) => {
            setiSwipperCaption(swiper);
        },
        grabCursor: false,
        speed: 2500,
        spaceBetween: 0,
        effect: "slide",
        onAutoplayTimeLeft: onAutoplayTimeLeft
    };

    const NumberSliderConfigs = {
        modules: [Navigation, Parallax, Autoplay, Mousewheel, EffectFade],
        direction: 'vertical',
        parallax: true,
        loop: true,
        // navigation: {
        //     nextEl: '.navControls .next',
        //     prevEl: '.navControls .prev',
        // },
        // mousewheel: {
        //     eventsTarget: '.sectionMain',
        // },
        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: false,
        // },
        autoplay: false,
        speed: 500,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        onSwiper: (swiper) => {
            // setParallaxSwiper(swiper);
            setiSwipperNumber(swiper)
        },
        spaceBetween: 0,
        effect: "slide"
    };


    const [parallaxSwiper, setParallaxSwiper] = useState(null);
    const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.85 : 0;
    const parallaxOpacity = 1;



    useEffect(() => {
        document.title = "Home - Faiz Muazzam";
        const elSliderProgress = document.getElementById('sliderProgress');
        elSliderProgress.style.setProperty('--progress', sliderProgress)
    });


    return (
        <Fragment>
            <RightBarHome>
                <ul className='nav slideNav'>
                    {
                        dataSlide.map((value, index) => {
                            return (
                                <li className='nav-item' key={index}>
                                    <button
                                        className={`btn p-0 controlSlider ${((indexActive + 1) == value.id) ? 'active' : ''}`}
                                        onClick={() => actionIndiicator((value.id - 1))}
                                    ></button>
                                </li>
                            )
                        })
                    }
                </ul>
            </RightBarHome>
            <div className='sectionMain' >
                <div className='container' id='homeSlider' ref={wheelsElement}>
                    <div className='sliderNumber'>
                        <h5>
                            <div className='innerNumber' >
                                <div className='insideNumber'>
                                    <Swiper
                                        {...NumberSliderConfigs}
                                    >
                                        {
                                            dataSlide.map((value, index) => {
                                                return (
                                                    <SwiperSlide key={index}>
                                                        <div className={`itemNumber`} >
                                                            0{value.id}
                                                        </div>
                                                    </SwiperSlide>

                                                )
                                            })
                                        }
                                    </Swiper>
                                </div>

                            </div>
                            <span>/</span>
                            <span>04</span>
                        </h5>
                    </div>

                    <div className='sliderBigNumber'>
                        <h5>
                            0{indexActive + 1}<span>//</span>
                        </h5>
                    </div>

                    <div className='sliderCaption'>
                        <div className='insideCaption'>
                            <Swiper
                                {
                                ...CaptionSliderConfigs
                                }>
                                {
                                    dataSlide.map((value, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className='itemCaption' >
                                                    <div className='captionInnner'>
                                                        <div className='containerCaption'>
                                                            <div className="intro">
                                                                <span>{value.intro}</span>
                                                            </div>
                                                            <div className='title'>
                                                                <h2>
                                                                    {value.title}
                                                                </h2>
                                                            </div>
                                                            <div className='content'>
                                                                <p>{value.content}</p>
                                                            </div>
                                                            <div className="link">
                                                                <a href="" className='btn btnTheme'>
                                                                    <div className='ico'>
                                                                        <Icon icon="ep:arrow-right-bold" />
                                                                    </div>
                                                                    <span>
                                                                        {value.infoLink}
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>

                                        )
                                    })
                                }
                            </Swiper>

                        </div>
                    </div>

                    <div className='slider' id="vSlider" ref={slider}>
                        <div className='bgCircle'>
                            <div className={`contentCircle  ${(sliderOn) ? 'onActive' : ''}`}></div>
                        </div>
                        <div className='overlayBorder'></div>
                        <div className='controlsPlay'>
                            <button className='btnPlay btn p-0' onClick={actionStopSlider}>
                                {
                                    (playSlider) ?
                                        <Icon icon="material-symbols:pause-outline-sharp" /> :
                                        <Icon icon="material-symbols:play-arrow-rounded" />

                                }
                            </button>
                        </div>


                        <div className='captionNumb'>
                            <div className='separator'></div>
                            <div className="itemNumb">
                                <span>
                                    40.7143528
                                </span>
                            </div>
                            <div className='itemNumb'>
                                <span>
                                    -
                                </span>
                            </div>
                            <div className='itemNumb'>
                                <span> 74.0059731</span>
                            </div>
                        </div>

                        <div className='navControls'>
                            <button className='btn p-0 controls prev' ref={navigationPrevRef}>
                                <Icon icon="majesticons:chevron-left" />
                            </button>
                            <button className='btn p-0 controls next' ref={navigationNextRef}>
                                <Icon icon="majesticons:chevron-right" />
                            </button>
                        </div>

                        {/* Slider */}

                        <div className='sliderInner' id='inSlide'>
                            <Swiper
                                {...HeroSliderConfigs}
                                className='insideSlide'
                            >

                                {
                                    dataSlide.map((value, key) => {
                                        return (
                                            <SwiperSlide
                                                key={key}>
                                                <div className={`itemSlider`}>
                                                    <div className='imgSlider'
                                                        data-swiper-parallax={parallaxAmount}
                                                        data-swiper-parallax-opacity={parallaxOpacity}
                                                    >
                                                        <img src={value.image} alt="Slide 1" className='img img-fluid' />
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                                {/* <OverlayArrow /> */}
                                <div className='bgArrow'>
                                    <div className='sliderProgress'>
                                        {/* style={strokeDashoffset : calc(125.6 * (1 - var(--progress)))} */}
                                        <div className='vProgress autoplay-progress' slot="container-end">
                                            <svg className="circ" width="50" height="50" viewBox="0 0 48 48" id='sliderProgress'>
                                                <circle className="circ2" cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDashoffset={0} fill="none"></circle>
                                                <circle className="circ1" cx="24" cy="24" r="20" stroke="#fff" strokeWidth="2" fill="none" ></circle>
                                            </svg>
                                            {/* <svg className="circ" width="50" height="50" viewBox="0 0 48 48" ref={progressCircle} id='sliderProgress'>
                                                <circle cx="24" cy="24" r="20"></circle>
                                            </svg> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='overlay'></div>
                            </Swiper>
                        </div>

                        <div className='startExplorer'>
                            <a href="" className='btn'>
                                {/* Start explore <Icon icon="material-symbols:arrow-right-alt-rounded" /> */}
                                Start explore <Icon icon="material-symbols:arrow-right-alt-rounded" />

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export default Home;
