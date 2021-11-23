import React, { createContext } from 'react';
import useCart from '../hooks/useCart';
import useCategory from '../hooks/useCategory';
import useFirebase from '../hooks/useFirebase'
import useProduct from '../hooks/useProduct';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allFirebase = useFirebase();
    const allCategory = useCategory();
    const allProduct = useProduct();
    const allCart = useCart();
    return (
        <AuthContext.Provider value={{ allCategory, allFirebase, allProduct, allCart }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;