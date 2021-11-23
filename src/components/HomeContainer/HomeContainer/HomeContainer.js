import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import ProductCategory from '../ProductCategory/ProductCategory';
import Products from '../ProductContainer/Products/Products';
import ShoeContainer from '../ShoeContainer/ShoeContainer';
import './HomeContainer.css'
const HomeContainer = () => {
    const { allFirebase, allCategory, allProduct } = useAuth();
    const { isLoading } = allFirebase;
    const { categories } = allCategory;
    const { products } = allProduct;
    if (isLoading) {
        return (
            <div className="site-loader">
                <div class="loader"></div>
            </div>
        )
    }
    if (categories?.length < 1) {
        return (
            <div className="site-loader">
                <div class="loader"></div>
            </div>
        )
    }
    if (products?.length < 1) {
        return (
            <div className="site-loader">
                <div class="loader"></div>
            </div>
        )
    }
    return (
        <>
            {
                <div>
                    <div className="home-banner">
                        <Header></Header>
                    </div>
                    <ProductCategory></ProductCategory>
                    <Products></Products>
                    <ShoeContainer></ShoeContainer>
                </div>
            }
        </>
    );
};

export default HomeContainer;