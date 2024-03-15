import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='bg-gray-100' id='contact'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-8'>
          <button className='bg-blue-600 hover:bg-blue-700 text-white text-xl font-medium py-2 px-4 rounded-lg'>Get In Touch</button>
          <h1 className='text-2xl font-medium text-gray-800 mt-4'>Let's Get Your Brand's Website Ready Now</h1>
          <h1 className='text-2xl font-medium text-blue-600 mt-2'>Get In Touch With Our Experts</h1>
        </div>
        <div className='flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6'>
          <div className='bg-white w-full md:w-80 h-32 flex flex-col items-center justify-center space-y-1 rounded-lg shadow-lg'>
            <a href='tel:+19034660144' className='flex items-center justify-center'>
              <BiPhoneCall size={30} color='blue' />
              <div className='ml-2'>
                <h1 className='text-lg text-gray-800 font-medium'>Call Us Anytime</h1>
                <h1 className='text-blue-600 font-medium'>+1 903-466-0144</h1>
              </div>
            </a>
          </div>
          <div className='bg-white w-full md:w-80 h-32 flex flex-col items-center justify-center space-y-3 rounded-lg shadow-lg'>
            <button className='bg-blue-600 hover:bg-blue-700 text-white text-lg py-1 px-2 rounded-lg'>Start Project</button>
            <button className='w-36 text-gray-800 border border-black text-lg py-1 px-2 rounded-lg'>Let's Talk</button>
          </div>
          <div className='bg-white w-full md:w-80 h-32 flex flex-col items-center justify-center space-y-1 rounded-lg shadow-lg'>
            <FaWhatsapp size={30} color='blue' />
            <h1 className='text-lg text-gray-800 font-medium'>Discuss Your Project</h1>
            <a target='_blank' href='https://wa.me/+1903-466-0144' className='text-blue-600 font-bold cursor-pointer'>Chat Live</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
