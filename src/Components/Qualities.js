import React from 'react';
import { FaNetworkWired } from 'react-icons/fa';
import Logo1 from '../Images/Logos/logo1.png'
import Logo2 from '../Images/Logos/logo2.png'
import Logo3 from '../Images/Logos/logo3.png'
import Logo4 from '../Images/Logos/logo4.png'
import Logo5 from '../Images/Logos/logo5.png'

const Qualities = () => {
    const myStyle = {
        bg: {
            background: 'rgb(0,0,0)',
            background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,48,80,1) 39%, rgba(0,113,187,1) 100%)',
        }
    }
    const data = [
        { logo: <FaNetworkWired color='blue' size={45} />, title: 'Persistent Client Collaboration', img: Logo1 },
        // { logo: <FaNetworkWired color='blue' size={45} />, title: 'Exceptional Customer Fulfillment', img: Logo2 },
        { logo: <FaNetworkWired color='blue' size={45} />, title: '100% Ownership Rights', img: Logo3 },
        { logo: <FaNetworkWired color='blue' size={45} />, title: 'Assured Refund Policy', img: Logo4 },
        { logo: <FaNetworkWired color='blue' size={45} />, title: 'Certified Industry Experts', img: Logo5 },
    ];

    return (
        <div style={myStyle.bg} className=''>
            <div className='container mx-auto px-4'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold text-white mb-4'>We Design The Best User Interface</h1>
                    <p className='text-lg text-blue-500'>To Set Your Footsteps Into Digital Realm</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10'>
                    {data.map((elem, index) => (
                        <div key={index} className='bg-white rounded-lg p-6 flex flex-col items-center justify-center'>
                            {/* {elem.logo} */}
                            <img src={elem.img} style={{}} />
                            <h1 className='md:text-lg lg:text-lg w-full font-bold text-gray-800 mt-4 text-center'>{elem.title}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Qualities;
