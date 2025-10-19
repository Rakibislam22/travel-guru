import React, { useRef, useState } from 'react';
import bgImage from '../assets/Rectangle 1.png';
import Navbar from '../componenets/Navbar';
import sajek from '../assets/Sajek.png';
import cosx from '../assets/Rectangle 1.png';
import sreemangal from '../assets/Sreemongol.png';
import sundarbans from '../assets/sundorbon.png';
import { BsArrowRight } from 'react-icons/bs';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Home = () => {
    const places = [
        { name: "COX'S BAZAR", img: cosx },
        { name: "SAJEK", img: sajek },
        { name: "SREEMANGAL", img: sreemangal },
        { name: "SUNDARBANS", img: sundarbans },
    ];

    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollLeft = () => {
        if (activeIndex > 0) {
            setActiveIndex((prev) => prev - 1);
            scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (activeIndex < places.length - 1) {
            setActiveIndex((prev) => prev + 1);
            scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
        }
    };

    return (
        <div
            className="relative bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="w-11/12 mx-auto relative text-white">
                <Navbar />
                <div className="md:py-50 py-15 z-10 flex flex-col md:flex-row justify-between items-start h-full gap-15">

                    {/* Left side text */}
                    <div className="space-y-6">
                        <h1 className="md:text-7xl text-5xl font-bold">{places[activeIndex].name}</h1>
                        <p className="max-w-[450px]">
                            Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...
                        </p>
                        <button className="btn btn-primary py-5 px-8 text-black text-lg flex items-center gap-2">
                            Booking <BsArrowRight className="ml-1 mt-1" />
                        </button>
                    </div>

                    {/* Right side cards */}
                    <div
                        ref={scrollRef}
                        className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full md:w-1/2 px-2 sm:px-4"
                    >
                        {places.map((place, index) => (
                            <div
                                key={index}
                                className={`relative snap-center rounded-xl overflow-hidden flex-shrink-0 border-3 transition-all duration-300
        ${activeIndex === index
                                        ? 'border-yellow-400 scale-99'
                                        : 'border-transparent opacity-70'
                                    }
        w-44 sm:w-52 md:w-72 lg:w-80 aspect-[4/5]
      `}
                            >
                                <img
                                    src={place.img}
                                    alt={place.name}
                                    className="w-full h-full object-cover brightness-75"
                                />
                                <div className="absolute inset-0 flex items-end justify-center pb-2 sm:pb-4 font-bold text-base sm:text-lg md:text-xl">
                                    {place.name}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Arrow buttons */}
                    <div className="absolute bottom-0 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 sm:gap-6">
                        <button
                            onClick={scrollLeft}
                            disabled={activeIndex === 0}
                            className={`bg-white/20 p-2 rounded-full text-2xl sm:text-3xl hover:bg-white/30 transition ${activeIndex === 0 && 'opacity-40 cursor-not-allowed'
                                }`}
                        >
                            <BiChevronLeft />
                        </button>
                        <button
                            onClick={scrollRight}
                            disabled={activeIndex === places.length - 1}
                            className={`bg-white/20 p-2 rounded-full text-2xl sm:text-3xl hover:bg-white/30 transition ${activeIndex === places.length - 1 && 'opacity-40 cursor-not-allowed'
                                }`}
                        >
                            <BiChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
