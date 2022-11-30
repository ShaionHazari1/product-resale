import React, { useEffect, useState } from 'react';
import ShowCategories from './ShowCategories';

const Category = () => {

    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch(`https://assignment-12-server-seven-chi.vercel.app/mobileCategory`)
        .then( res => res.json())
        .then( data => setCategories(data))
        .catch( err => console.error(err));
    } , [])

    return (
        <div>
            <h2 className='text-4xl text-center mt-14 mb-5 font-semibold'> Select Any <span className='text-orange-600'>Brand</span> And Find Your <span className='text-orange-600'>Targeted Mobile</span> </h2>
            <div className='grid lg:grid-cols-3 gap-9'>
                {
                    categories?.map( category => <ShowCategories
                    key={category._id}
                    category={category}
                    ></ShowCategories>)
                }
            </div>
        </div>
    );
};

export default Category;