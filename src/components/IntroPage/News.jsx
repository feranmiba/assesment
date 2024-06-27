import React, { useState } from 'react';
import { BsX } from 'react-icons/bs';

function News() {
    const [showModal, setShowModal] = useState(true)

    const visibility = () => {
        setShowModal(!showModal)
      }
  return (
    <div>
   {showModal &&( <div className='fixed right-0 bottom-0 w-[400px] h-[200px] lg:h-[280px] lg:w-[500px] bg-[#212121] shadow-lg p-6 text-white'>
      <section className='mt-1 lg:mt-5'>
      <div className='flex justify-between'>
      <h1 className='text-2xl lg:text-6xl font-bold mb-2 lg:mb-4 '>Newsletter</h1>
      <p className='text-3xl cursor-pointer' onClick={visibility} ><BsX /></p>
      </div>
        <p className='text-gray-700 mb-4'>
          Get the latest updates straight into your inbox.
        </p>
        <div className=' mt-2 lg:mt-10 '>
       <input type='email' placeholder='Enter your email address' className='border border-[#676767] bg-transparent w-[258px] lg:w-[328px] h-[50px] rounded-l-full px-5 outline-none'/><button className='w-[90px] md:w-[120px] -ml-10 h-[50px] bg-white top-[1px] left-[320px] text-[#212121] rounded-full md:font-bold'>Subscribe</button>
       </div>
      </section>
    </div>)}
    </div>
  );
}

export default News;

