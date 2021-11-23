import React from 'react';
import useAuth from '../../../hooks/useAuth';
import shoeBanner from '../../../images/shoe-banner.jpg'
import './ShoeContainer.css';
import Carousel from "react-elastic-carousel";
import Item from './Item'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const ShoeContainer = () => {
    const { allProduct } = useAuth();
    const { products } = allProduct;
    const shoes = products?.filter(shoe => shoe?.category === 'Shoe');
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 3 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 6 },
    ];
    return (
        <div>
            <div className="row" style={{ overflowX: "hidden", margin: "10px 20px", justifyContent: 'center', alignItems: "center" }}>
                <div className="col-md-3">
                    <img className="img-fluid shoe-banner" src={shoeBanner} alt="" />
                </div>
                <div className="col-md-9">
                    <Carousel breakPoints={breakPoints} style={{ width: "100%" }} >
                        {
                            shoes.map(shoe => (
                                <Item>
                                    <div className="single-item shadow">
                                        <div>
                                            <img className="shoe-product-photo img-fluid" src={`data:image/jpeg;base64,${shoe.image}`} alt="" />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                            <span style={{ fontSize: "12px", backgroundColor: "red", color: "#fff", padding: "0 5px", borderRadius: "10px" }} className="my-2">Category: {shoe.category}</span>
                                            <span style={{ fontSize: "12px", backgroundColor: "red", color: "#fff", padding: "0 5px", borderRadius: "10px" }} className="my-2 ">Stock: {shoe.stock}</span>
                                        </div>
                                        <h5>{shoe.title}</h5>
                                        <p style={{ fontSize: "12px" }}>{shoe.description.slice(0, 50)}</p>
                                        <h6>
                                            Price: <del>${shoe.regularPrice}</del> ${shoe.offerPrice}
                                        </h6>
                                        <div className="row">
                                            <div className="col">
                                                <div className="d-grid">
                                                    <button className="btn btn-sm slide"><ShoppingCartIcon /> ADD TO CART</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Item>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default ShoeContainer;