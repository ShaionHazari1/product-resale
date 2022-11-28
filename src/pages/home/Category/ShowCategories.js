import React from 'react';
import { Link } from 'react-router-dom';

const ShowCategories = ({ category }) => {
    console.log(category)

    const { _id, name, mobileImg, totalMobile } = category;

    return (
        <div>
            <Link to="/usedMobiles">
                <div className='flex p-5 mx-7 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer'>
                    <div>
                        <img className='w-16 mr-5' src={mobileImg} alt="" />
                    </div>
                    <div>
                        <h2 className="text-3xl">{name}</h2>
                        <p> Total Mobile of This Brand : {totalMobile}</p>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ShowCategories;