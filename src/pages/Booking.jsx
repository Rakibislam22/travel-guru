import React from 'react';
import bgImage from '../assets/Rectangle 1.png';
import Navbar from '../componenets/Navbar';

const Booking = () => {
    return (
        <div className="relative bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="absolute inset-0 bg-black/70">
                <div className="w-11/12 mx-auto relative text-white">
                    <Navbar></Navbar>

                    <div className="md:py-30 py-5 flex flex-col md:flex-row justify-evenly items-start gap-15">
                        <div className='space-y-6'>
                            <h1 className="md:text-7xl text-5xl font-bold">Cox's bazar</h1>
                            <p className="max-w-[450px]">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                        </div>

                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="card bg-base-100 shadow-2xl">
                                <div className="card-body">
                                    <fieldset className="fieldset md:w-[400px] md:h-[270px]">
                                        <label className="label text-[#818181]">Origin</label>
                                        <input type="text" className="input text-black w-full font-bold" required placeholder="Dhaka" />
                                        <label className="label text-[#818181]">Destination</label>
                                        <input type="text" className="input text-black w-full font-bold" required placeholder="Cox's Bazar" />
                                        <div className=' flex justify-between items-center '>
                                            <div>
                                                <label className="label text-[#818181]">From</label>
                                                <input type="date" className="input text-black " placeholder="" />
                                            </div>

                                            <div>
                                                <label className="label text-[#818181]">To</label>
                                                <input type="date" className="input text-black" placeholder="" />
                                            </div>


                                        </div>
                                        <button className="btn btn-primary mt-4 text-black">Start Booking</button>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Booking;