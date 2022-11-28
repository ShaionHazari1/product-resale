import React from 'react';

const UsedMobilesDetails = ({mobile, setTreatment}) => {
    const {name, location, mobileImg, originalPrice, publishDate, resalePrice, yearsOfUsed, information} = mobile;
    return (
        <div className='p-5 rounded-lg border border-red-400'>
            <img className='w-11/12' src={mobileImg} alt="" />
            <h2 className="text-2xl">{name}</h2>
            <p>{location}</p>
            <p>{originalPrice}</p>
            <p>{resalePrice}</p>
            <p>{publishDate}</p>
            <p>{yearsOfUsed}</p>
            <p>{information}</p>
            {/* <button className='btn btn-outline w-full mt-3'>Book Now</button> */}
            <label 
            className='btn btn-outline w-full mt-3' 
            onClick={() => setTreatment(mobile)}
            htmlFor="booking-modal"
            >Book Now</label>
        </div>
    );
};

export default UsedMobilesDetails;