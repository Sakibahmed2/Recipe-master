import React from 'react';
import NavBar from '../component/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';

const Main = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;