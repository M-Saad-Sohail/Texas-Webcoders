import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const Features = () => {
    const features = [
        "WEBSITE",
        "E-COMMERCE",
        "LOGO DESIGN",
        "SMM",
        "SEO",
        "CONTENT WRITING",
        "BRANDING",
        "ILLUSTRATION",
        "VIDEO",
        "MOBILE APPS",
    ]
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <>
            <div className='hidden xmd:flex justify-center'>
                <ul className='flex flex-wrap justify-around w-full text-white lg:w-11/12 bg-[#0070b8] py-3 px-5 rounded-full font-medium text-sm'>
                    {features.map((elem, index) => (
                        <li key={index} className='cursor-pointer py-1 px-1.5 md:px-2 lg:px-2.5 xl:px-3 sm:text-xs md:text-sm'>{elem}</li>
                    ))}
                </ul>
            </div>

            {/* DROPDOWN  */}

            <div className='xmd:hidden inline-block relative text-left'>
                <button
                    onClick={toggleDropdown}
                    type="button"
                    className='flex items-center w-full py-2 px-4 rounded-lg shadow-md text-sm font-medium text-white myBlue hover:bg-[#09578f] focus:ring-4 focus:outline-none focus:ring-blue-300'
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
                    <ul className="py-2 text-sm myBlue text-gray-700">
                        {features.map((elem, index) => (
                            <li key={index}>
                                <button className="block px-4 py-2 myBlue text-white hover:bg-[#09578f] w-full text-left">{elem}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Features
