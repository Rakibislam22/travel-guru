import React from 'react';
import logo from '/logo.png';

const Navbar = () => {
    return (
        <div className="pt-5 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-10">
            {/* Left side: Logo + Search */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-15 w-full sm:w-auto">
                <div className="w-28">
                    <img className="invert" src={logo} alt="Logo" />
                </div>

                <div className="w-full sm:w-auto mt-2 sm:mt-0">
                    <label className="input bg-[#ffffff33] text-white border-white w-full sm:w-80 flex items-center px-2 py-1 rounded">
                        <svg
                            className="h-5 w-5 opacity-100 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            className="placeholder-white bg-transparent w-full"
                            type="search"
                            required
                            placeholder="Search Destination"
                        />
                    </label>
                </div>
            </div>

            {/* Right side: Menu items */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-10 font-medium mt-3 sm:mt-0">
                <p className="text-sm sm:text-base">News</p>
                <p className="text-sm sm:text-base">Destination</p>
                <p className="text-sm sm:text-base">Blog</p>
                <p className="text-sm sm:text-base">Contact</p>
                <button className="btn btn-primary text-black py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;
