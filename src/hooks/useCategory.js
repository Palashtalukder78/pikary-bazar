import { useEffect, useState } from 'react';

const useCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://safe-retreat-38415.herokuapp.com/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [categories])
    return {
        categories,
        setCategories
    }
};

export default useCategory;