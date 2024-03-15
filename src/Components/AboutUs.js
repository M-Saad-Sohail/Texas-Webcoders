import React from 'react'
import Img2 from '../Images/IMG 2.jpg'


const AboutUs = () => {
    const aboutus = `Welcome to Texas Web Coders, where innovation meets excellence in web development. Based in the vibrant heart of Texas, we are a team of passionate developers, designers, and digital strategists dedicated to helping businesses thrive in the ever-evolving online landscape.`
    const mission = `is simple yet ambitious: to deliver exceptional web development services tailored to the unique needs of each client. Through collaborative partnerships, creativity, and technical prowess, we aim to create digital experiences that not only meet but exceed expectations. At Texas Web Coders, we don't just build websites – we build digital success stories.`
    const innovation = `We embrace creativity and innovation to stay ahead of the curve in web development trends and technologies.`
    const excellence = `We are committed to delivering nothing short of excellence in every project, big or small.`
    const integrity = `Honesty, transparency, and integrity are the cornerstones of our business practices.`
       return (
        <>
            <div className='md:flex p-6'>
                <div className='w-full md:w-1/2 flex justify-end'>
                    <div className='mx-auto w-9/12 lg:w-11/12 xl:w-full'>
                        <img src={Img2} className='w-full'/>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='space-y-4 w-full lg:w-11/12 xl:w-full'>
                        <h1 style={{ transform: 'skew(20deg)' }} className='w-24 h-12 md:w-28 md:h-14 lg:w-32 lg:h-16 xl:w-36 xl:h-20 bg-[#008de9] flex justify-center items-center'>
                            <p style={{ transform: 'skew(-20deg)', }} className="text-base md:text-lg lg:text-xl xl:text-2xl inline-block font-medium text-white">
                                About Us
                            </p>
                        </h1>
                        <p className='text-gray-800 text-xs lg:textsm xl:text-base'>{aboutus}</p>
                        <p className='text-gray-800 text-xs lg:textsm xl:text-base'><span className='font-medium'>Texas Webcoders Mission </span> {mission}</p>
                        <p className='text-gray-800 text-xs lg:textsm xl:text-base'><span className='font-medium'>Innovation:</span>{innovation}</p>
                        <p className='text-gray-800 text-xs lg:textsm xl:text-base'><span className='font-medium'>Excellence: </span>{excellence}</p>
                        <p className='text-gray-800 text-xs lg:textsm xl:text-base'><span className='font-medium'>Integrity: </span>{integrity}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
