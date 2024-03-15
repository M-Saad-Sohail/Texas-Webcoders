import React from 'react'
import { FaNetworkWired } from "react-icons/fa";

const Reviews = () => {
    const myStyle = {
        bg: {
            background: 'rgb(0,0,0)',
            background: 'linear-gradient(90deg,rgba(0,113,187,1) 0%, rgba(0,48,80,1) 39%, rgba(0,0,0,1) 100%)',
        }
    }

    return (
        <>
            <div style={myStyle.bg} className='w-full h-72 mt-10 flex flex-col justify-evenly items-center'>
                <div className='text-center space-y-4'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-medium text-white'>Extremely satisfied with the services</h1>
                    <h1 className='text-sm md:text-base lg:text-lg text-white w-2/3 mx-auto'>Totally the agency you would want to be on your side! I love the way they take interest in your work and treat is like their very own, phenomenal creations and delivery.</h1>
                </div>
            </div>
        </>
    )
}

export default Reviews
