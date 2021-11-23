import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './AddCategories.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import swal from 'sweetalert';
import { LinearProgress } from '@mui/material';
const AllCategoriesTable = () => {
    const { allCategory } = useAuth();
    const { categories } = allCategory;

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
            {
                categories.length < 1 &&
                <LinearProgress />
            }
            <table table class="table" responsive >
                <thead>
                    <tr>
                        <th scope="col">Category Name</th>
                        <th scope="col">Author Email</th>
                        <th scope="col">Photo</th>
                        <th scope="col" className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories?.map(category => (
                            <tr>
                                <th scope="row">{category?.name}</th>
                                <td>{category?.email}</td>
                                <td>
                                    <img className="category-photo-table" src={`data:image/jpeg;base64,${category.image}`} alt='category_photo' />
                                </td>
                                <td className="text-center">
                                    <span className="delete_btn" onClick={() => handleDeleteCategory(category?._id)}>
                                        <DeleteForeverIcon className="trash_icon" />
                                    </span>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
};

export default AllCategoriesTable;