import React from 'react'

const Buttons = (props) => {
    return (
        <>
            <button class={`rounded-lg before:ease relative px-4 py-1 mx-2 overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32`}>
                <span class="relative z-10 font-medium text-2xl">{props.title}</span>
            </button>
        </>
    )
}

export default Buttons
