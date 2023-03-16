import React, { Fragment } from 'react';

import HeaderText01 from '../../components/HeaderText01';
import RightBarHome from '../../components/RightBarHome';

import { Icon } from '@iconify/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Parallax, Autoplay, Mousewheel, EffectFade, Pagination, FreeMode, Scrollbar } from "swiper";

import 'swiper/css';
import 'swiper/css/bundle';


// Import css files


import { Chart as ChartJS, ArcElement, Tooltip, Legend, Filler } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';



import imgSlide1 from '../../assets/images/slide_01.jpg';
import imgSlide2 from '../../assets/images/slide_02.jpg';
import imgSlide3 from '../../assets/images/slide_03.jpg';
import imgSlide4 from '../../assets/images/slide_04.jpg';


import imgAbout001 from '../../assets/images/about/img_profile_about.jpg';
import imgTeam01 from '../../assets/images/about/img_slider_01.jpg';
import imgTeam02 from '../../assets/images/about/img_slider_02.jpg';
import imgTeam03 from '../../assets/images/about/img_slider_03.jpg';

import imgTesti01 from '../../assets/images/about/img_testi_01.jpg';
import imgTesti02 from '../../assets/images/about/img_testi_02.jpg';
import imgTesti03 from '../../assets/images/about/img_testi_03.jpg';
import imgTesti04 from '../../assets/images/about/img_testi_04.jpg';

import imgClient01 from '../../assets/images/about/img_client_01.png';
import imgClient02 from '../../assets/images/about/img_client_02.png';
import imgClient03 from '../../assets/images/about/img_client_03.png';
import imgClient04 from '../../assets/images/about/img_client_04.png';
import { map } from 'jquery';
import { Form } from 'react-router-dom';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






const About = () => {
  ChartJS.register(ArcElement, Tooltip, Legend, Filler);

  // const configContentScroll = {
  //   direction: 'vertical',
  //   slidesPerView: 'auto',
  //   freeMode: true,
  //   scrollbar: true,
  //   mousewheel: true,
  //   modules: [FreeMode, Scrollbar, Mousewheel],
  //   className: "swipperContentList"
  // }

  const configContentTeam = {
    // direction: 'vertical',
    slidesPerView: 2,
    // loop: true,
    // freeMode: true,
    // scrollbar: true,
    // mousewheel: true,
    spaceBetween: 30,
    effect: "slide",
    speed: 500,
    modules: [],
    className: "swipperTeamList",
    onSlideChangeTransitionEnd: () => {
      console.log('test');
    }
  }

  const configTesti = {
    className: "center",
    centerMode: true,
    infinite: true,
    // slidesToShow: 3,
    variableWidth: true,
    speed: 500,
    dots: true
  }

  const dataService = [
    {
      id: 1,
      icon: <Icon icon="quill:desktop" />,
      title: 'Web Design',
      intro: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor.',
      desc: 'Cras mattis iudicium purus sit amet fermentum at nos hinc posthac, sitientis piros afros. Lorem ipsum dolor sit amet, consectetur adipisici elit, petierunt uti sibi concilium totius Galliae in diem sed eius mod tempor incidunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus piros labore et dolore magna.'
    },
    {
      id: 2,
      icon: <Icon icon="simple-icons:overleaf" />,
      title: 'Branding',
      intro: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor.',
      desc: 'Cras mattis iudicium purus sit amet fermentum at nos hinc posthac, sitientis piros afros. Lorem ipsum dolor sit amet, consectetur adipisici elit, petierunt uti sibi concilium totius Galliae in diem sed eius mod tempor incidunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus piros labore et dolore magna.'
    },
    {
      id: 3,
      icon: <Icon icon="heroicons:device-phone-mobile" />,
      title: 'UI/UX Design',
      intro: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor.',
      desc: 'Cras mattis iudicium purus sit amet fermentum at nos hinc posthac, sitientis piros afros. Lorem ipsum dolor sit amet, consectetur adipisici elit, petierunt uti sibi concilium totius Galliae in diem sed eius mod tempor incidunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus piros labore et dolore magna.'
    },
    {
      id: 4,
      icon: <Icon icon="ei:camera" />,
      title: 'Photography',
      intro: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor.',
      desc: 'Cras mattis iudicium purus sit amet fermentum at nos hinc posthac, sitientis piros afros. Lorem ipsum dolor sit amet, consectetur adipisici elit, petierunt uti sibi concilium totius Galliae in diem sed eius mod tempor incidunt ut labore et dolore magna aliqua. Pellentesque habitant morbi tristique senectus et netus piros labore et dolore magna.'
    },
  ]

  const dataTeam = [
    {
      id: 1,
      pict: imgTeam01,
      name: 'David Gray',
      job: 'CEO / Developer',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ',
      fb: '',
      ig: '',
      tw: '',
      in: ''
    },
    {
      id: 2,
      pict: imgTeam02,
      name: 'Alica Limishko',
      job: 'Designer / UI-Ux',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ',
      fb: '',
      ig: '',
      tw: '',
      in: ''
    },
    {
      id: 3,
      pict: imgTeam03,
      name: 'Kevin Brunty',
      job: 'Photographer / Designer',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ',
      fb: '',
      ig: '',
      tw: '',
      in: ''
    }
  ]

  const dataSoftSkill = [
    {
      id: 1,
      label: 'Photoshop',
      score: 85
    },
    {
      id: 2,
      label: 'HTML/CSS',
      score: 95
    },
    {
      id: 3,
      label: 'SASS',
      score: 95
    },
    {
      id: 4,
      label: 'PHP',
      score: 90
    },
    {
      id: 5,
      label: 'Javascript',
      score: 95
    },

    {
      id: 5,
      label: 'React js',
      score: 90
    }
  ]

  const dataLang = [
    {
      id: 1,
      lang: 'Indonesia',
      score: 95,
      config: {
        datasets: [
          {
            // label: '# of Votes',
            data: [95, 100 - 95],
            backgroundColor: [
              '#f57500',
              '#eeeeee',
            ],
            borderWidth: 0,

          },
        ],
      }
    },
    {
      id: 2,
      lang: 'English',
      score: 75,
      config: {
        datasets: [
          {
            // label: '# of Votes',
            data: [75, 100 - 75],
            backgroundColor: [
              '#f57500',
              '#eeeeee',
            ],
            borderWidth: 0,
          },
        ],
      }
    },
    {
      id: 3,
      lang: 'Javanese',
      score: 90,
      config: {
        datasets: [
          {
            // label: '# of Votes',
            data: [90, 100 - 90],
            backgroundColor: [
              '#f57500',
              '#eeeeee',
            ],
            borderWidth: 0,

          },
        ],
      }
    }
  ]

  const dataTesti = [
    {
      id: 1,
      pict: imgTesti01,
      name: 'Andy Dimasky',
      desc: '"Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor. Duis autem vel eum  sit amet semiriure dolor consectetur adipiscing elit."'
    },
    {
      id: 2,
      pict: imgTesti01,
      name: 'Andy Dimasky',
      desc: '"Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor. Duis autem vel eum  sit amet semiriure dolor consectetur adipiscing elit."'
    },
    {
      id: 3,
      pict: imgTesti01,
      name: 'Andy Dimasky',
      desc: '"Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor. Duis autem vel eum  sit amet semiriure dolor consectetur adipiscing elit."'
    },
    {
      id: 4,
      pict: imgTesti01,
      name: 'Andy Dimasky',
      desc: '"Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor. Duis autem vel eum  sit amet semiriure dolor consectetur adipiscing elit."'
    }
  ]

  const dataClient = [
    {
      id: 1,
      pict: imgClient01
    },
    {
      id: 2,
      pict: imgClient02
    },
    {
      id: 3,
      pict: imgClient03
    },
    {
      id: 4,
      pict: imgClient04
    }
  ]



  return (
    <Fragment>
      <RightBarHome classCustom='noBg' classFullH='noFull' />
      <div className='sectionAbout'>
        <div className='rowContent'>
          <div className='contentLeft'>
            {/* <Swiper {...configContentScroll}>
              <SwiperSlide> */}
            <section className='sectionAbout01'>
              <div className='contentNumber'>
                <span>01.</span>
              </div>
              <div className='container'>
                <HeaderText01>
                  <h3>Some   Words About Me</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.  </p>
                </HeaderText01>
                <div className='boxContent'>
                  <div className='row'>
                    <div className='col-md-5'>
                      <div className='imageProfile'>
                        <img src={imgAbout001} alt="Image Profile" className='img img-fluid' />
                      </div>
                    </div>
                    <div className='col-md-7'>
                      <div className='contentText'>
                        <div className='contentProfile'>
                          <div className="title">
                            <h3>
                              Innovative solutions to boost <br />
                              <span> your creative </span> projects
                            </h3>
                          </div>
                          <div className='desc'>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat fermentum.
                            </p>
                            <p>
                              Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa.
                            </p>
                          </div>
                        </div>
                        <div className='contentCreation'>
                          <div className='row'>
                            <div className='col'>
                              <div className='itemCount'>
                                <div className='numCount'>
                                  <span>145</span>
                                </div>
                                <div className='info'>
                                  <span>Finished projects</span>
                                </div>
                              </div>
                            </div>
                            <div className='col'>
                              <div className='itemCount'>
                                <div className='numCount'>
                                  <span>825</span>
                                </div>
                                <div className='info'>
                                  <span>Working hours</span>
                                </div>
                              </div>
                            </div>
                            <div className='col'>
                              <div className='itemCount'>
                                <div className='numCount'>
                                  <span>15</span>
                                </div>
                                <div className='info'>
                                  <span>Awards won</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='viewButton'>
                          <a href="" className='btn btnTheme'>
                            <div className='ico'>
                              <Icon icon="ep:arrow-right-bold" />
                            </div>
                            <span>
                              My Portofolio
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </section>

            <div className='separatorLine'>
              <div className="separator"></div>
            </div>
            <section className='sectionAbout02'>
              <div className='contentNumber'>
                <span>02.</span>
              </div>
              <div className='container'>
                <HeaderText01>
                  <h3>Services Provided</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.  </p>
                </HeaderText01>
                <div className='boxContent'>
                  <div className='row'>
                    {
                      dataService.map((value, index) => {
                        return (
                          <div className='col-md-6' key={value.id}>
                            <div className='itemService'>
                              <div className='viewSmallNumber'>
                                <span>0{value.id}.</span>
                              </div>
                              <div className='boxItem'>
                                <div className='headItem'>
                                  {value.icon}
                                  <h3>{value.title}</h3>
                                </div>
                                <div className='desc'>
                                  <p>{value.intro}</p>
                                </div>
                                <div className='viewDetail'>
                                  <button className='btn p-0'>
                                    <Icon icon="ph:plus-bold" /> Details
                                  </button>
                                </div>
                                <div className='separator'></div>
                              </div>
                              <div className='boxDescItem'>
                                <div className='headDesc'>
                                  <ul className='nav'>
                                    <li className='nav-item'>
                                      <a href="#" className='nav-link'>
                                        Concept
                                      </a>
                                    </li>
                                    <li className='nav-item'>
                                      <a href="#" className='nav-link'>
                                        Design
                                      </a>
                                    </li>
                                    <li className='nav-item'>
                                      <a href="#" className='nav-link'>
                                        3D Modeling
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className='desc'>
                                  <p>{value.desc}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                  <div className='viewGetContact'>
                    <h4>Ready to order your project ? Visit my contacts page :  </h4>
                    <div className='viewBtnContact'>
                      <button className='btn btnTheme'>
                        <div className='ico'>
                          <Icon icon="ep:arrow-right-bold" />
                        </div>
                        <span>Contacts</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className='separatorLine'>
              <div className="separator"></div>
            </div>
            <section className='sectionAbout03'>
              <div className='contentNumber'>
                <span>03.</span>
              </div>
              <div className='container'>
                <HeaderText01>
                  <h3>
                    My Awesome Team
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                  </p>
                </HeaderText01>
                <div className='boxContent'>
                  <div className='slideTeam'>
                    <Swiper {...configContentTeam}>
                      {
                        dataTeam.map((value, index) => {
                          return (
                            <SwiperSlide key={value.id}>
                              <div className='itemTeam'>
                                <div className='boxImage'>
                                  <div className='overlay'></div>
                                  <div className='viewImage'>
                                    <img src={value.pict} alt="" className='img img-fluid' />
                                  </div>
                                  <div className='number'>
                                    <span>0{value.id}.</span>
                                  </div>
                                  <div className='listSosmed'>
                                    <ul className="nav">
                                      <li className="nav-item">
                                        <a className="nav-link" href="#">
                                          <Icon icon="ri:facebook-fill" />
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" href="#">
                                          <Icon icon="mdi:instagram" />
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" href="#">
                                          <Icon icon="mdi:twitter" />
                                        </a>
                                      </li>
                                      <li className="nav-item">
                                        <a className="nav-link" href="#">
                                          <Icon icon="mdi:linkedin" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className='boxDesc'>
                                  <div className='name'>
                                    <h4>{value.name}</h4>
                                  </div>
                                  <div className='job'>
                                    <span>{value.job}</span>
                                  </div>
                                  <div className='desc'>
                                    <p>
                                      {value.desc}
                                    </p>
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
              </div>
            </section>

            <div className='separatorLine'>
              <div className="separator"></div>
            </div>
            <section className='sectionAbout04'>
              <div className='contentNumber'>
                <span>04.</span>
              </div>
              <div className='container'>
                <HeaderText01>
                  <h3>
                    Developer  and  Language  Skills
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                  </p>
                </HeaderText01>
                <div className='boxContent'>
                  <div className='row'>
                    <div className='col-md-9'>
                      <div className='boxSkill'>
                        {
                          dataSoftSkill.map((value, index) => {
                            return (
                              <div className='itemSkill'>
                                <div className='label'>
                                  <div className='labelLeft'>
                                    <span>{value.label}</span>
                                  </div>
                                  <div className='labelRight'>
                                    <span>{value.score}%</span>
                                  </div>
                                </div>
                                <div className='valueSkill'>
                                  <div className='getValueSkill' style={{ width: `${value.score}%` }}></div>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                    <div className='col-md-3'>
                      <div className='boxSkillLanguage'>
                        {
                          dataLang.map((value, index) => {
                            return (
                              <div className='itemLangSkill'>
                                <div className='boxItem'>
                                  <div className='viewPie'>
                                    <Doughnut data={value.config} />
                                    <div className='viewScore'>
                                      <span>{value.score}<small>%</small></span>
                                    </div>
                                  </div>
                                  <div className='langInit'>
                                    <span>{value.lang}</span>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className='separatorLine'>
              <div className="separator"></div>
            </div>
            <section className='sectionAbout05'>
              <div className='contentNumber'>
                <span>05.</span>
              </div>
              <div className='container'>
                <HeaderText01>
                  <h3>
                    CLENTS AND TESTIMONILAS
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                  </p>
                </HeaderText01>
                <div className='boxContent'>
                  <div className='sliderTestimony'>
                    <Slider {...configTesti}>
                      {dataTesti.map((value, index) => {
                        return (

                          <div className='itemTesti' key={value.id}>
                            <div className='headItem'>
                              <div className='headProfile'>
                                <img src={value.pict} alt="" className='img img-fluid' />
                                <span>
                                  {value.name}
                                </span>
                              </div>
                              <div className='headItemNumber'>
                                <span>0{value.id}.</span>
                              </div>
                            </div>
                            <div className='descItem'>
                              <p>{value.desc}</p>
                            </div>
                          </div>
                        )
                      })}
                    </Slider>
                  </div>
                  <div className='listClient'>
                    <div className='row'>
                      {dataClient.map((value, index) => {
                        return (
                          <div className='col-md-3 col-6'>
                            <div className="itemClient">
                              <a href="" className='btn'>
                                <img src={value.pict} alt="" className='img img-fluid' />
                              </a>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* </SwiperSlide>
            </Swiper> */}
          </div>
          <div className='contentRight'>

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default About;
