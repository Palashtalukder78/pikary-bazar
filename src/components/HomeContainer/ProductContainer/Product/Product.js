import React, { useState } from 'react';
import './Product.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import useAuth from '../../../../hooks/useAuth';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
const Product = ({ product }) => {
    const { title, category, description, stock, regularPrice, offerPrice, image } = product;
    const { allCart } = useAuth();
    const [carts, setCarts] = allCart;

    const [quantity, setQuantity] = useState(1);
    const handleIncrease = () => {
        if (quantity < stock) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
        }
    }
    const handleDecrease = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
        }
    }
    const handleAddToCart = (product) => {
        product.quantity = quantity;
        const newCart = [...carts, product];
        setCarts(newCart);
        console.log(newCart);
    }
    return (
        <div className="col-md-3">
            <div className="single-item shadow">
                <div>
                    <img className="home-product-photo img-fluid" src={`data:image/jpeg;base64,${image}`} alt="" />
                </div>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <span className="my-2 category-background">Category: {category}</span>
                    <span className="my-2 stock-background">Stock: {stock}</span>
                </div>
                <h4>{title}</h4>
                <p>{description.slice(0, 60)} ...</p>

                <div>
                    <ButtonGroup size="small" aria-label="outlined light button group">
                        <Button onClick={handleDecrease}>-</Button>
                        <Button > {quantity}</Button>
                        <Button onClick={handleIncrease}>+</Button>
                    </ButtonGroup>
                </div>
                <h4>
                    Price: <del>${regularPrice}</del> ${offerPrice}
                </h4>

                <div className="row">
                    <div className="col-md-3">
                        <div className="d-grid">
                            <button className="btn btn-sm slide"><VisibilityIcon /></button>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="d-grid">
                            <button onClick={() => handleAddToCart(product)} className="btn btn-sm slide"><ShoppingCartIcon /> ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Product;