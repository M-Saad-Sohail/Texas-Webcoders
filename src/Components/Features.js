import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Features = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <>
            <div className='hidden xmd:flex justify-center'>
                <ul className='flex flex-wrap justify-around w-full text-white lg:w-11/12 bg-[#0070b8] py-3 px-5 rounded-full font-medium text-sm'>
                    <li className='cursor-pointer py-1 px-1.5 md:px-2 lg:px-2.5 xl:px-3 sm:text-xs md:text-sm'>WEBSITE</li>
                    <li className='cursor-pointer py-1 px-1.5 md:px-2 lg:px-2.5 xl:px-3 sm:text-xs md:text-sm'>E-COMMERCE</li>
                    <li className='cursor-pointer py-1 px-1.5 md:px-2 lg:px-2.5 xl:px-3 sm:text-xs md:text-sm'>LOGO DESIGN</li>
                    <li className='cursor-pointer py-1 px-1.5 md:px-2 lg:px-2.5 xl:px-3 sm:text-xs md:text-sm'>SMM</li>
                    <li className='cursor-pointer py-1 px-1.5 md:px-2 lg:px-2.5 xl:px-3 sm:text-xs md:text-sm'>SEO</li>
                    <li className='cursor-pointer py-1 px-1.5 md:px-2 lg:px-2.5 xl:px-3 sm:text-xs md:text-sm'>CONTENT WRITING</li>
                    <li className='cursor-pointer py-1 px-1.5 md:px-2 lg:px-2.5 xl:px-3 sm:text-xs md:text-sm'>BRANDING</li>
                    <li className='cursor-pointer py-1 px-1.5 md:px-2 lg:px-2.5 xl:px-3 sm:text-xs md:text-sm'>ILLUSTRATION</li>
                    <li className='cursor-pointer py-1 px-1.5 md:px-2 lg:px-2.5 xl:px-3 sm:text-xs md:text-sm'>VIDEO</li>
                    <li className='cursor-pointer py-1 px-1.5 md:px-2 lg:px-2.5 xl:px-3 sm:text-xs md:text-sm'>MOBILE APPS</li>
                </ul>
            </div>

            {/* DROPDOWN  */}

            <div className='xmd:hidden inline-block relative text-left'>
                <button
                    onClick={toggleDropdown}
                    type="button"
                    className='flex items-center w-full py-2 px-4 rounded-lg shadow-md text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
                    id='dropdownDefaultButton'
                    aria-expanded={isDropdownOpen ? 'true' : 'false'}
                    aria-haspopup='true'
                >
                    Website
                    {'\u00A0'} <IoIosArrowDown size={20} />
                </button>

                <div
                    className={`absolute z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44`}
                    aria-labelledby='dropdownDefaultButton'
                >
                    <ul className="py-2 text-sm bg-blue-700 text-gray-700">
                        <li>
                            <button className="block px-4 py-2 bg-blue-700 text-white hover:bg-blue-800 w-full text-left">E-COMMERCE</button>
                        </li>
                        <li>
                            <button className="block px-4 py-2 bg-blue-700 text-white hover:bg-blue-800 w-full text-left">LOGO DESIGN</button>
                        </li>
                        <li>
                            <button className="block px-4 py-2 bg-blue-700 text-white hover:bg-blue-800 w-full text-left">SMM</button>
                        </li>
                        <li>
                            <button className="block px-4 py-2 bg-blue-700 text-white hover:bg-blue-800 w-full text-left">SEO</button>
                        </li>
                        <li>
                            <button className="block px-4 py-2 bg-blue-700 text-white hover:bg-blue-800 w-full text-left">CONTENT WRITING</button>
                        </li>
                        <li>
                            <button className="block px-4 py-2 bg-blue-700 text-white hover:bg-blue-800 w-full text-left">BRANDING</button>
                        </li>
                        <li>
                            <button className="block px-4 py-2 bg-blue-700 text-white hover:bg-blue-800 w-full text-left">ILLUSTRATION</button>
                        </li>
                        <li>
                            <button className="block px-4 py-2 bg-blue-700 text-white hover:bg-blue-800 w-full text-left">VIDEO</button>
                        </li>
                        <li>
                            <button className="block px-4 py-2 bg-blue-700 text-white hover:bg-blue-800 w-full text-left">MOBILE APPS</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Features
