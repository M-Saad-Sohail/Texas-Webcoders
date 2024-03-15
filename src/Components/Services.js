import React from 'react';
import { TbDeviceMobileCode } from "react-icons/tb";

const Services = () => {
    const boxes = [
        { logo: <TbDeviceMobileCode size={50} />, title: "Web Development", para: "Our custom web solutions are designed to offer highly attractive websites, with visuals and features designed to make your business processes simpler and efficient." },
        { logo: <TbDeviceMobileCode size={50} />, title: "App Development", para: "Baritechsol's app developers are expert in developing feature-rich apps for the desktop, mobile, and web environment, with highly intuitive and easily scalable design." },
        { logo: <TbDeviceMobileCode size={50} />, title: "LOGO DESIGN", para: "Baritechsol's app developers are expert in developing feature-rich apps for the desktop, mobile, and web environment, with highly intuitive and easily scalable design." },
        { logo: <TbDeviceMobileCode size={50} />, title: "LOGO DESIGN", para: "Baritechsol's app developers are expert in developing feature-rich apps for the desktop, mobile, and web environment, with highly intuitive and easily scalable design." },
    ];

    return (
        <>
            <h1 className='text-4xl font-bold text-center'>SERVICES</h1>
            <div className="flex justify-evenly items-center mt-8">
                {boxes.map((elem, index) => (
                    <div key={index} className="flex flex-col justify-evenly rounded-xl px-4 border border-gray-400 w-64 h-64 relative overflow-hidden group hover:text-white hover:bg-[#0086dd]">
                        {elem.logo}
                        <h1 className='text-2xl font-bold text-gray-800 group-hover:text-white'>{elem.title}</h1>
                        <p className='text-sm text-gray-600 group-hover:text-white'>{elem.para}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Services;
