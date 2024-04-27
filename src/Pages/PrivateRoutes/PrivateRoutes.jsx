import React, { useContext } from 'react';
import { AuthContect } from '../../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

    const {user} = useContext(AuthContect)

    if(user){
        return children
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;