import { useEffect, useState } from 'react';

const useProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://safe-retreat-38415.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return {
        products,
        setProducts
    }
};

export default useProduct;