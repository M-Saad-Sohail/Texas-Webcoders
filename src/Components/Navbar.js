import React, { useState } from 'react';
import Img from '../Images/Logo-01.png';
import { SiLivechat } from 'react-icons/si';
import { BiPhoneCall } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToContact = () => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
            contactElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-evenly mx-auto p-4 space-x-3">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Img} className="h-8" alt="Flowbite Logo" />
                    </a>
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen ? "true" : "false"}
                    >
                        <RxHamburgerMenu color='white' size={25} />
                    </button>
                    <div className={isOpen ? "hidden md:block md:w-auto" : "w-full md:block md:w-auto"}>
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 px-2 md:px-3 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-2 md:px-3 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-2 md:px-3 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-2 md:px-3 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-2 md:px-3 text-sm text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden w-full md:block md:w-auto'>
                        <div className='flex justify-center items-center space-x-2'>
                            <SiLivechat className='dark:text-white' size={25} />
                            <h1 className='dark:text-white text-base'>Live Chat</h1>
                        </div>
                    </div>
                    <div className='hidden w-full md:block md:w-auto'>
                        <div className='flex justify-center items-center space-x-2' onClick={scrollToContact}>
                            <BiPhoneCall className='dark:text-white' size={25} />
                            <h1 className='dark:text-white text-base cursor-pointer'>Call Us Now</h1>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
