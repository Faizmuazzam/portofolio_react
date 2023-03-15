import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage404 from './environment/error/ErrorPage404';
import Header from './components/Header';
import "./assets/css/bootstrap.min.css";
import "./assets/sass/style.scss";
import Sidebar from './components/Sidebar';

import Home from './environment/home/Home';
import About from './environment/about/About';




const Main = () => {
    return (
        <main className='main wrapper'>
            <BrowserRouter>
                <Header />
                <Sidebar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='about' element={<About />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default Main;
