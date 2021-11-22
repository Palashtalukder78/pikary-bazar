import { useEffect, useState } from 'react';

const useCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [categories])
    return {
        categories,
        setCategories
    }
};

export default useCategory;