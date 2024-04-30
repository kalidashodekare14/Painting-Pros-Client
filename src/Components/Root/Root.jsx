import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Navbar/Navbar';
import Footer from '../../Pages/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className=' bg-base-100 border-b'>
                <div className='relative mx-10'>
                    <Navbar></Navbar>
                </div>
            </div>
            <div className='pt-20'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;