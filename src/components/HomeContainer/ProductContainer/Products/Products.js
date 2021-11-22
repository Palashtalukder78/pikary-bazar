import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import Product from '../Product/Product';
import '../Product/Product.css'
const Products = () => {
    const { allProduct } = useAuth();
    const { products } = allProduct;
    return (
        <div className="productContainer">
            <h1>Products</h1>
            <div className="row">
                {
                    products.slice(0, 8).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>
                    )
                }
            </div>
        </div>
    );
};

export default Products;