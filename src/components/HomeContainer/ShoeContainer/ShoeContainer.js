import React from 'react';
import useAuth from '../../../hooks/useAuth';
import shoeBanner from '../../../images/shoe-banner.jpg'
import './ShoeContainer.css';
import Carousel from "react-elastic-carousel";


import SingleShoe from './SingleShoe/SingleShoe';
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
                            shoes.map(shoe => <SingleShoe
                                key={shoe._id}
                                shoe={shoe}
                            ></SingleShoe>)
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default ShoeContainer;