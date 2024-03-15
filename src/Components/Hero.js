import React from 'react';
import Img from '../Images/lpt-removebg-preview.png';
// import Img1 from '../Images/Logo-01.png';

const Hero = () => {
    const para1 = `Your brand's online presence is more than just a website – it's your digital identity. At Texas Web Coders, we understand the significance of making that first impression count. As a premier website design and development company based in Texas, we specialize in creating custom websites that truly reflect the essence of your business.`;
    const para2 = `In today's competitive digital landscape, standing out is crucial. That's why we go beyond the ordinary to ensure your website not only looks exceptional but also delivers an unmatched user experience. Our team of experts possesses the skills and expertise to design and develop websites that are not just visually appealing but also aligned with the latest digital trends.`

  
    const myStyle = {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),  url('https://media.istockphoto.com/id/1491194755/photo/computer-programmers-working-in-the-office.jpg?s=612x612&w=0&k=20&c=TIEIbQJvFMZuRGASYNfPEh8OyL5pjHpywijwAW3XRao=')`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const contentStyle = {
        textAlign: "center",
    };

    return (
        <div style={myStyle}>
            <div className='md:flex p-6 w-full'>
                <div className='w-full md:w-1/2 flex justify-end'>
                    <div className='mx-auto w-9/12 lg:w-11/12 xl:w-full'>
                        <img src={Img} className='w-full' alt="Illustration" />
                    </div>
                </div>
                <div className='w-full md:w-1/2' style={contentStyle}>
                    <div className='space-y-4 w-full lg:w-11/12 xl:w-full'>
                        <h1 style={{ transform: 'skew(20deg)' }} className='w-52 h-12 md:w-56 md:h-14 lg:w-60 lg:h-16 xl:w-64 xl:h-20 bg-[#008de9] flex justify-center items-center'>
                            <p style={{ transform: 'skew(-20deg)', }} className="text-base md:text-lg lg:text-xl xl:text-2xl inline-block font-medium text-white">
                                Website Development
                            </p>
                        </h1>
                        <h1 className='text-4xl font-medium text-blue-700'>Get Your Website Ready Now</h1>
                        <p className='text-gray-800 text-xs lg:text-sm xl:text-base text-left'>{para1}</p>
                        <p className='text-gray-800 text-xs lg:text-sm xl:text-base text-left'>{para2}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
