import React from 'react'
import Img from '../Images/IMG 4.jpg'
import { FaCheckCircle } from "react-icons/fa";
import Buttons from './Elements/Buttons';
import Headings from './Elements/Headings';

const Branding = () => {

    const list1 = [
        { text: "Unlimited Logo Design Concepts" },
        { text: "Unlimited Revisions" },
        { text: "Icon Design" },
        { text: "All Final File Formats" },
    ]
    const list2 = [
        { text: "Business Card, Letterhead, Envelope" },
        { text: "MS Word Letterhead" },
    ]
    const list3 = [
        { text: "Unlimited Pages Website" },
        { text: "Content Management System (CMS)" },
        { text: "Mobile Responsive" },
        { text: "5 Stock Photos + 3 Banner Designs" },
        { text: "Any 3 Social Media Platforms" },
        { text: "Complete W3C Certified HTML" },
        { text: "Complete Deployment" },
    ]
    const list4 = [
        { text: "Dedicated Account Manager" },
        { text: "100% Ownership Rights" },
        { text: "100% Money Back Guarantee" },
        { text: "Complete Deployment" },
    ]
    return (
        <>
            <div className='md:flex p-6 bg-white'>
                <div className='w-full md:w-9/12'>
                    <div className='space-y-4 w-full lg:w-11/12 xl:w-full'>
                        {/* <button className='bg-[#0081d5] w-36 text-white text-xl font-medium py-2 px-3 rounded-lg'>Get In Touch</button> */}
                        <Headings title="Get In Touch" />
                        <h1 className='text-gray-800 text2xl xl:text-3xl font-medium'>An Optimum Packages</h1>
                        <h1 className='text-[#0081d5] text2xl xl:text-3xl font-medium'>For Your Bussiness</h1>
                        <p className='text-gray-800 text-sm'>We are offering a complete package to start your digital journey. Design Craftic is keen to drive your ventures to new heights. Your brand, our design – A responsive and crafty website design to interact with your audience.</p>
                        <div className='flex justify-between'>
                            <div className='pr-6 space-y-3'>
                                <h1 className='text-[#0081d5] text-xl font-medium'>Logo Design</h1>
                                {list1.map((elem, index) => (
                                    <div key={index} className='flex items-center gap-x-1'>
                                        <FaCheckCircle color='#0081d5' size={15} />
                                        <p className='text-sm'>{elem.text}</p>
                                    </div>
                                ))}
                                <h1 className='text-[#0081d5] text-xl font-medium'>Website Design</h1>
                                {list3.map((elem, index) => (
                                    <div key={index} className='flex items-center gap-x-1'>
                                        <FaCheckCircle color='#0081d5' size={15} />
                                        <p className='text-sm'>{elem.text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className='pr-6 space-y-3'>
                                <h1 className='text-[#0081d5] text-xl font-medium'>Stationary Design</h1>
                                {list2.map((elem, index) => (
                                    <div key={index} className='flex items-center gap-x-1'>
                                        <FaCheckCircle color='#0081d5' size={15} />
                                        <p className='text-sm'>{elem.text}</p>
                                    </div>
                                ))}
                                <h1 className='text-[#0081d5] text-xl font-medium'>Value Add Services</h1>
                                {list4.map((elem, index) => (
                                    <div key={index} className='flex items-center gap-x-1'>
                                        <FaCheckCircle color='#0081d5' size={15} />
                                        <p className='text-sm'>{elem.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* <button className='bg-[#0081d5] w-36 text-white text-xl font-medium py-2 px-3 rounded-lg mr-8'>Order Now</button> */}
                        <Buttons title="Order Now" />
                        <Buttons title="Live Chat" />
                        {/* <button className='w-36 border border-black text-xl font-medium py-2 px-3 rounded-lg mx-3'>Live Chat</button> */}
                    </div>
                </div>
                <div className='w-full md:w-3/4 flex justify-end items-center'>
                    <div className='mx-auto'>
                        <img src={Img} className='w-full' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Branding
