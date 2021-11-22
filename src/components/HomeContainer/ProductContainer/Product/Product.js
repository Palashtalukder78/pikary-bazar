import React from 'react';
import './Product.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
const Product = ({ product }) => {
    const { title, category, description, stock, regularPrice, offerPrice, image } = product;
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
                            <button className="btn btn-sm slide"><ShoppingCartIcon /> ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;