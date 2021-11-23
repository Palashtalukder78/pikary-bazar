import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';
import React, { useRef, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import './Addproduct.css';
import swal from 'sweetalert';
const AddProduct = () => {
    const { allCategory } = useAuth();
    const { categories } = allCategory;
    const titleRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();
    const stockRef = useRef();
    const regularPriceRef = useRef();
    const offerPriceRef = useRef();
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);

    const handleAddProduct = (e) => {
        e.preventDefault()
        if (!image) {
            swal("Opps", "Photo must be needed!", "warning");
        }
        setLoading(true)
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const category = categoryRef.current.value;
        const stock = stockRef.current.value;
        const regularPrice = regularPriceRef.current.value;
        const offerPrice = offerPriceRef.current.value;

        let formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('stock', stock);
        formData.append('regularPrice', regularPrice);
        formData.append('offerPrice', offerPrice);
        formData.append('image', image);

        fetch('https://safe-retreat-38415.herokuapp.com/products', {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    e.target.reset();
                    swal("Wow", "Product adding successfully!", "success");
                }
            })
            .catch(error => {
                swal("Opps", "Someting went wrong", "warning");
            })
            .finally(() => setLoading(false))
    }
    const Input = styled('input')({
        display: 'none',
    });
    return (
        <div>
            <h3>Add Product</h3>
            <form onSubmit={handleAddProduct} className="add-product-form">
                <div className="row">
                    <div className="col-md-8">
                        <label>Product Title: </label>
                        <input ref={titleRef} type="text" className="form-control" placeholder="Enter Product Title Here" />
                        <label>Product Description: </label>
                        <textarea ref={descriptionRef} name="" id="" cols="30" rows="8" className="form-control" placeholder="Enter Product description Here"></textarea>
                    </div>
                    <div className="col-md-4">
                        <label>Select Product Category: </label>
                        <select ref={categoryRef} class="form-select" aria-label="Default select example">
                            <option selected>Select Category</option>
                            {
                                categories.map(category => (
                                    <>
                                        <option value={category.name}>{category.name}</option>
                                    </>
                                ))
                            }

                        </select>
                        <label>Available Stock</label>
                        <input ref={stockRef} type="number" className="form-control" placeholder="Enter Number of Stock" />
                        <div className="product-price">
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Regular Price</label>
                                    <input ref={regularPriceRef} type="number" className="form-control" placeholder="Regular Price" />
                                </div>
                                <div className="col-md-6">
                                    <label>Offer Price</label>
                                    <input ref={offerPriceRef} type="number" className="form-control" placeholder="Offer Price" />
                                </div>
                            </div>
                        </div>

                        <label>Add Photo: </label>
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>

                        <div className="d-grid">
                            {!loading &&
                                <button className="btn add-product-btn">Add Product</button>
                            }
                            {loading &&
                                <div className="text-center my-3 mx-auto" style={{ display: "block", margin: "auto" }}>
                                    <div class="dots text-center">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;