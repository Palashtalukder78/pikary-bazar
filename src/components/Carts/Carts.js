import React from 'react';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';
import SingleCartItem from './SingleCartItem/SingleCartItem';

const Carts = () => {
    const { allCart } = useAuth();
    const [carts] = allCart;

    let subTotal = 0;
    for (const item of carts) {
        subTotal = subTotal + item.offerPrice * item.quantity;
    }
    return (
        <>
            <Header></Header>
            <div>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-12">
                                    {
                                        carts.map(cart => <SingleCartItem
                                            key={cart._id}
                                            cart={cart}
                                        ></SingleCartItem>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h1>SubTotal: {subTotal}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carts;