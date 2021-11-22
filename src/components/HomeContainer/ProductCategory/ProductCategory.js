import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Container } from '@mui/material';
import './ProductCategory.css'
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 6 },
    { width: 1200, itemsToShow: 9 },
];
const ProductCategory = () => {
    const { allCategory } = useAuth();
    const { categories } = allCategory;
    return (
        <Container className="category-container" >
            <Carousel breakPoints={breakPoints}>
                {
                    categories.map(category => (
                        <Item>
                            <div className="single-category text-center">
                                <div>
                                    <img className="img-fluid home-category-photo" src={`data:image/jpeg;base64,${category.image}`} alt="" />
                                </div>
                                <h6 className="text-light mt-3">{category?.name}</h6>
                            </div>
                        </Item>
                    ))
                }
            </Carousel>
        </Container>
    );
};

export default ProductCategory;