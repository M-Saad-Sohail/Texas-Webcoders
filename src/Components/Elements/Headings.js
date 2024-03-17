import React from 'react'

const Headings = (props) => {
    return (
        <div>
            <h1 className='text-3xl xl:text-4xl inline-block font-bold text-center text-white bg-[#0070b8] px-6 py-2 rounded-xl'>{props.title}</h1>
        </div>
    )
}

export default Headings
