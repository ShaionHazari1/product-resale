import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const BookingModal = ({ treatment, setTreatment }) => {
    const { name, location, mobileImg, originalPrice, publishDate, resalePrice, yearsOfUsed, information } = treatment;

    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;


        const booking = {
            location,
            originalPrice,
            resalePrice,
            publishDate,
            yearsOfUsed,
            name,
            email,
            phone
        }

        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then( res => res.json())
        .then( data => {
            console.log(data)
            if(data.acknowledged) {
                setTreatment(null);
                toast.success('Booking Confirmed');

            }
        })
        .catch(err => console.error(err))

        
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img className='w-11/12' src={mobileImg} alt="" />
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking}>
                        {/* <input type="text" value={`Mobile Info : ${information}`} className="input input-bordered input-secondary w-full mt-3 " disabled /> */}
                        <input name="location" type="text" value={`Location : ${location}`} className="input input-bordered input-secondary w-full mt-3 " disabled />
                        <input name="originalPrice" type="text" value={`Original Price : ${originalPrice} Taka`} className="input input-bordered input-secondary w-full mt-3 " disabled />
                        <input name="resalePrice" type="text" value={`Resale Price : ${resalePrice} Taka`} className="input input-bordered input-secondary w-full mt-3 " disabled />
                        <input name="publishDate" type="text" value={`Publish Date : ${publishDate}`} className="input input-bordered input-secondary w-full mt-3 " disabled />
                        <input name="yearsOfUsed" type="text" value={`Years of Used : ${yearsOfUsed}`} className="input input-bordered input-secondary w-full mt-3 " disabled />
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder='Your Name' className="input input-bordered input-secondary w-full mt-3 " />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder='Your Email' className="input input-bordered input-secondary w-full mt-3 " />
                        <input name="phone" type="text" defaultValue={user?.phone} placeholder='Your Phone' className="input input-bordered input-secondary w-full mt-3 " />
                        <input className='btn btn-outline w-full mt-3' type="submit" value="Book Now" />
                    </form>
                    {/* <p className="py-4">{information}</p>
                    <p>{location}</p>
                    <p>{originalPrice}</p>
                    <p>{resalePrice}</p>
                    <p>{publishDate}</p>
                    <p>{yearsOfUsed}</p>
                    <label
                        className='btn btn-outline w-full mt-3'
                        htmlFor="booking-modal"
                    >Book Now</label> */}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;