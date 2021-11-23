import React, { useState } from 'react';
import Item from './Item'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useAuth from '../../../../hooks/useAuth';
const SingleShoe = ({ shoe }) => {
    const { title, category, description, stock, regularPrice, offerPrice, image } = shoe;
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

    const handleAddToCart = (shoeItem) => {
        shoeItem.quantity = quantity;
        const newCart = [...carts, shoeItem];
        setCarts(newCart)
        console.log(newCart)
    }
    return (
        <Item>
            <div className="single-item shadow">
                <div>
                    <img className="shoe-product-photo img-fluid" src={`data:image/jpeg;base64,${image}`} alt="" />
                </div>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>
                    <span style={{ fontSize: "12px", backgroundColor: "red", color: "#fff", padding: "0 5px", borderRadius: "10px" }} className="my-2">Category: {category}</span>
                    <span style={{ fontSize: "12px", backgroundColor: "red", color: "#fff", padding: "0 5px", borderRadius: "10px" }} className="my-2 ">Stock: {stock}</span>
                </div>
                <h5>{title}</h5>
                <p style={{ fontSize: "12px" }}>{description.slice(0, 50)}</p>

                <ButtonGroup size="small" aria-label="outlined light button group">
                    <Button onClick={handleDecrease}>-</Button>
                    <Button > {quantity}</Button>
                    <Button onClick={handleIncrease}>+</Button>
                </ButtonGroup>

                {/* <div class="btn-group btn-group-sm" role="group" aria-label="Basic outlined example">
                    <button onClick={handleDecrease} type="button" class="btn btn-outline-primary">-</button>
                    <button type="button" class="btn btn-outline-primary">{quantity}</button>
                    <button onClick={handleIncrease} type="button" class="btn btn-outline-primary">+</button>
                </div> */}

                <h6>
                    Price: <del>${regularPrice}</del> ${offerPrice}
                </h6>
                <div className="row">
                    <div className="col">
                        <div className="d-grid">
                            <button onClick={() => handleAddToCart(shoe)} className="btn btn-sm slide"><ShoppingCartIcon /> ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </Item>
    );
};

export default SingleShoe;