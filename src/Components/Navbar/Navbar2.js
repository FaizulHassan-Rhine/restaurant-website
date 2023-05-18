import React, { useContext, useState } from "react";

import logo from '../../images/logo.png'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navbar2 = () => {

    const [navbar, setNavbar] = useState(false);



    const [activeLink, setActiveLink] = useState("");

    function handleLinkClick(link) {
        setActiveLink(link);
    }



    const refresh = () => {
        window.location.reload(true)
    }



    return (
        <div className="w-full bg-white sticky top-0 z-[999]">
            <div className="container mx-auto">

                <nav className="w-full bg-white">
                    <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-8">
                        <div>
                            <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                                <Link to='/' >
                                    <img className="h-10 w-10" src={logo} />
                                </Link>
                                <div className="lg:hidden">
                                    <button
                                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {navbar ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-black"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-black"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block" : "hidden"
                                    }`}
                            >
                                <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                                    <li className="text-black font-semibold hover:text-orange-400">
                                        <HashLink
                                            to="/#homee"
                                            onClick={() => handleLinkClick("homee")}
                                            className={` ${activeLink === "homee" ? "text-orange-400" : ""
                                                }`}
                                        >
                                            Home
                                        </HashLink>
                                    </li>
                                    <li className="text-black font-semibold hover:text-orange-400">
                                        <HashLink
                                            to="/#menuss"
                                            onClick={() => handleLinkClick("menu")}
                                            className={` ${activeLink === "menu" ? "text-orange-400" : ""
                                                }`}
                                        >
                                            Menu
                                        </HashLink>
                                    </li>
                                    <li>
                                        <div className="relative">
                                            <button
                                                // onClick={toggleDropdown}
                                                className="px-4 py-2 text-black font-semibold hover:text-orange-400"
                                            >
                                                <HashLink
                                                    to="/contact-us"
                                                    onClick={() => handleLinkClick("contact")}
                                                    className={` ${activeLink === "contact" ? "text-orange-400" : ""
                                                        }`}
                                                >
                                                    Contact <i className="fa-solid fa-chevron-down text-xs"></i>
                                                </HashLink>
                                            </button>

                                        </div>
                                    </li>

                                    <li className="text-black font-semibold hover:text-orange-400">
                                        <HashLink
                                            to="/#pricing"
                                            onClick={() => handleLinkClick("Pricing")}
                                            className={` ${activeLink === "Pricing" ? "text-orange-400" : ""
                                                }`}
                                        >
                                            Blog
                                        </HashLink>
                                    </li>


                                </ul>




                                <div className="mt-3 space-y-2 lg:hidden ">
                                    <button
                                        id="singInButton"

                                        className="inline-block w-full px-4 py-2 text-center text-black font-semibold hover:text-white  rounded-3xl  hover:bg-[#003333]"
                                    >
                                        Log in
                                    </button>
                                    <button
                                        id="singUpButton"

                                        className="inline-block w-full px-4 py-2 text-center text-black hover:text-white  rounded-3xl  hover:bg-[#003333]"
                                    >
                                        Sign up
                                    </button>
                                </div>

                            </div>
                        </div>



                        <div className="hidden space-x-2 lg:inline-block ">

                            <button
                                id="singInButton"

                                className="px-4 py-1  text-black font-semibold  rounded-3xl hover:text-white hover:bg-[#003333]"
                            >
                                Log in
                            </button>
                            <button
                                id="singUpButton"

                                className="px-4 py-1  text-black font-semibold  rounded-3xl hover:text-white  hover:bg-[#003333]"
                            >
                                Sign up
                            </button>
                        </div>

                    </div>
                </nav>





            </div>
        </div>

    )
}

export default Navbar2;