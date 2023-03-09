import React from 'react';
import { NavLink, Link } from 'react-router-dom';


import logo from '../assets/images/logo_h.png';

const Menu = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to={'/'} className="nav-link" >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to={'/about'} className="nav-link" >
          About
        </NavLink>
      </li>
    </ul>
  )
}

const Header = () => {
  return (
    <header className='header'>
      <div className="headContent">
        <nav className="headLeft">
          <div className='leftContent'>
            <div className='viewBrand'>
              <a className="navbaBrand" href="#">
                <img src={logo} alt="Faiz Muazzam" className='img img-fluid' />
              </a>
            </div>
          </div>
          <div className='rightContent'>
            <div className='separator'></div>
            <ul className="nav headContact">
              <li className="nav-item">
                <a className="nav-link" href="https:wa.me/+6281912940523" target={'_blank'}>
                  01. Whatsapp <span>+6281912940523</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  02. WRITE <span>FaizMuazzam</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='headRight'>
          <div className='headToggle'>
            <button className='btn contentToggle'>
              <div className='btnToggle'>
                <div className='icToggle '>
                  <span className='t01'></span>
                </div>
                <div className='icToggle'>
                  <span className='t02'></span>
                </div>
                <div className='icToggle'>
                  <span className='t03'></span>
                </div>
              </div>
              <div className='nameToggle'>
                <span>Menu</span>
              </div>
            </button>
          </div>
          <div className='headTitle'>
            <div className='separator'></div>
            <div className='namePage'>
              <span>Home Slider</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
