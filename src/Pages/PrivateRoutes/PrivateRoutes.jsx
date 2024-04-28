import React, { useContext } from 'react';
import { AuthContect } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {

    const { user, loader } = useContext(AuthContect)
    const location = useLocation()

    if (loader) {
        return <div className='flex justify-center items-center min-h-screen'>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;