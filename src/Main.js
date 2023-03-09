import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage404 from './environment/error/ErrorPage404';
import Home from './environment/home/Home';
import Header from './components/Header';
import "./assets/css/bootstrap.min.css";
import "./assets/sass/style.scss";
import Sidebar from './components/Sidebar';




const Main = () => {
    return (
        <main className='main wrapper'>
            <BrowserRouter>
                <Header />
                <Sidebar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default Main;
