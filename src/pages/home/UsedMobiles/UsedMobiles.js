import React, { useEffect, useState } from 'react';
// import BookingModal from '../BookingModal/BookingModal';
// import UsedMobilesDetails from './UsedMobilesDetails';
import UsedMobilesDetails from '../UsedMobiles/UsedMobilesDetails';
import BookingModal from '../../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../share/Loading/Loading';

const UsedMobiles = () => {
    // const [usedMobiles, setUsedMobiles] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const {data: usedMobiles = [], isLoading} = useQuery({
        queryKey: ['usedMobiles'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allItems`);
            const data = await res.json();
            return data;
        }
            
        });


        if(isLoading) {
            return <Loading></Loading>
        }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/allItems`)
    //         .then(res => res.json())
    //         .then(data => setUsedMobiles(data))
    // }, [])

    return (
        <section>
            <div className='grid lg:grid-cols-3 gap-7 mt-20'>
                {
                    usedMobiles?.map(mobile => <UsedMobilesDetails
                        key={mobile._id}
                        mobile={mobile}
                        setTreatment={setTreatment}
                    ></UsedMobilesDetails>)
                }
            </div>
            <div>
                {
                    treatment &&
                    <BookingModal
                        treatment={treatment}
                        setTreatment={setTreatment}
                    ></BookingModal>}
            </div>
        </section>
    );
};

export default UsedMobiles;