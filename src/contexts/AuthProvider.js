import React, { createContext } from 'react';
import useCategory from '../hooks/useCategory';
import useFirebase from '../hooks/useFirebase'
import useProduct from '../hooks/useProduct';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allFirebase = useFirebase();
    const allCategory = useCategory();
    const allProduct = useProduct();
    return (
        <AuthContext.Provider value={{ allCategory, allFirebase, allProduct }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;