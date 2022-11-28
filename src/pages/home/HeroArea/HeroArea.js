import React from 'react';
import HeroImg from '../../../images/heroImg/hero.png';
import './HeroArea.css';

const HeroArea = () => {
    return (
        <div className='hero-area grid lg:grid-cols-2 items-center bg-red-100 p-10'>
            
            <div>
                <h2 data-text="Welcome..." className=' font-semibold mb-5'>Welcome...</h2>
                <p>Mobile phones became a very important element of well-developed societies. It is not only a device, but also a “smart” part of our life. Very often this devices support people with the answers to the various questions, like: opening hours, weather forecast, news, sport games results, clues, etc. So in a way, that devices solves everyday lifes issues and generally provides relief to peoples brains,</p>
            </div>

            <div>
                <img className='w-full' src={HeroImg} alt="" />
            </div>


            {/* <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default HeroArea;