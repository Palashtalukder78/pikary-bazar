import React, { useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import { IconButton, TextField, } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/system';
import './AddCategories.css'
import useAuth from '../../../hooks/useAuth';
import swal from 'sweetalert';
import AllCategoriesTable from './AllCategoriesTable';
const AddCategories = () => {
    const { allFirebase } = useAuth();
    const { user } = allFirebase;
    const autherRef = useRef();

    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleAddCategory = (e) => {
        if (!image) {
            swal("Opps", "Photo must be needed!", "warning");
        }
        setLoading(true)
        const email = autherRef.current.value;

        let formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('http://localhost:5000/categories', {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    e.target.reset();
                    swal("Wow", "Category added successfully!", "success");
                }
            })
            .catch(error => {
                console.log('Kono genjam ase')
            })
            .finally(() => setLoading(false))
        e.preventDefault()
    }

    const Input = styled('input')({
        display: 'none',
    });
    return (
        <Grid container spacing={2} className="flexible">
            <Grid item xs={12} md={4}>
                <div className="category-form">
                    <h4 className="text-center mb-4">Add Category</h4>
                    <form onSubmit={handleAddCategory}>
                        <TextField onChange={e => setName(e.target.value)} className="category-field" id="outlined-basic" label="Category Name" variant="outlined" required />

                        <input type="text" ref={autherRef} defaultValue={user?.email} hidden />
                        <label>Add Photo: </label>
                        <label htmlFor="icon-button-file">
                            <Input accept="image/*" id="icon-button-file" type="file"
                                onChange={e => setImage(e.target.files[0])}
                            />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>
                        <br />
                        <div className="d-grid">
                            {!loading &&
                                <button type="submit" className="btn btn-primary">
                                    Add Category
                                </button>}
                            {
                                loading &&
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
                    </form>
                </div>
            </Grid>
            <Grid item xs={12} md={8}>
                <AllCategoriesTable></AllCategoriesTable>
            </Grid>
        </Grid>
    );
};

export default AddCategories;