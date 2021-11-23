import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './Products.css'
import swal from 'sweetalert';
const Products = () => {
    const { allProduct } = useAuth();
    const { products } = allProduct;

    const handleDeleteCategory = (id) => {
        swal("Do you sure to Shiped this order ?")
            .then((value) => {
                if (value) {
                    const url = `https://safe-retreat-38415.herokuapp.com/categories/${id}`
                    fetch(url, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("Good Job!", "Order cancel Successfully!", "success");
                            }
                        })
                }
            })
    }
    return (
        <>
            <div>
                <h3>All Product: {products.length}</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Category</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Price</th>
                            <th scope="col">Image</th>
                            <th scope="col" className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(product => (
                                <tr>
                                    <th scope="row">{product.title}</th>
                                    <td>{product.category}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <del>{product.regularPrice}</del>
                                        <br />
                                        {product.offerPrice}
                                    </td>
                                    <td>
                                        <img className="dashboard-product-photo" src={`data:image/jpeg;base64,${product.image}`} alt="Product_photo" />
                                    </td>
                                    <td className="text-center">
                                        <span className="delete_btn" onClick={() => handleDeleteCategory(product?._id)}>
                                            <DeleteForeverIcon className="trash_icon" />
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {
                products.length < 1 &&
                <div className="text-center">
                    <svg className="dashboard-loader" viewBox="0 0 50 50">
                        <circle class="ring" cx="25" cy="25" r="20"></circle>
                        <circle class="ball" cx="25" cy="5" r="3.5"></circle>
                    </svg>
                </div>
            }
        </>
    );
};

export default Products;