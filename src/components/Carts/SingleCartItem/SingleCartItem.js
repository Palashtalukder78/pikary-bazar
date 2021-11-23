import React from 'react';
import './SingleCartItem.css'
const SingleCartItem = ({ cart }) => {
    const { image, title, category, offerPrice, quantity } = cart;
    return (
        <div>
            <div className="flexible-cart">
                <div>
                    <img src={`data:image/jpeg;base64,${image}`} alt="" />
                </div>
                <div className="ms-4">
                    <span className="m-0 cart-category-background" >{category}</span>
                    <h4>{title}</h4>
                    <h3>${offerPrice} X {quantity}</h3>
                    <h3>${offerPrice * quantity}</h3>
                </div>
            </div>
        </div>
    );
};

export default SingleCartItem;