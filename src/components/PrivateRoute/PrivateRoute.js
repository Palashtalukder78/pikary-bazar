import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PrivateRoute.css'
const PrivateRoute = ({ children, ...rest }) => {
    const { allFirebase } = useAuth();
    const location = useLocation();
    const { user, isLoading } = allFirebase;

    if (isLoading) {
        return (
            <div className="site-loader">
                <div class="loader"></div>
            </div>
        )
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;