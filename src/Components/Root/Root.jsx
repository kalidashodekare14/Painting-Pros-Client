import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <div className=' bg-base-100 border-b'>
                <div className='mx-10'>
                    <Navbar></Navbar>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;