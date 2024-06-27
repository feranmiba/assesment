import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Pic1 from '../Images/babe.png';
import pic1s from '../Images/bujnews green.png';
import pic2 from '../Images/clap.png';
import pic2s from '../Images/Ontecx-Logo-PNG-300x88 1 (4).png';
import pic3 from '../Images/them.png';
import pic3s from '../Images/Guardian 1.png';
import pic4 from '../Images/held.png';
import pic4s from '../Images/punch-newspaper-logo-1024x768.png';

function Feature() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const details = [
    {
      img1: Pic1,
      img2: pic1s,
      title: "SINC Partners invests  over 200 million naira in 5 startups",
      summ: "SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....",
      by: "Rema viel"
    },
    {
      img1: pic2,
      img2: pic2s,
      title: "SINC Partners invests  over 200 million naira in 5 startups",
      summ: "SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....",
      by: "Rema viel"
    },
    {
      img1: pic3,
      img2: pic3s,
      title: "SINC Partners invests  over 200 million naira in 5 startups",
      summ: "SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....",
      by: "Rema viel"
    },
    {
      img1: pic4,
      img2: pic4s,
      title: "SINC Partners invests  over 200 million naira in 5 startups",
      summ: "SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....",
      by: "Rema viel"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === details.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Change slide every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval); // Cleanup function to clear interval on unmount
  }, [details.length]);

  return (
    <div>
      <div className='flex justify-center mt-28'>
        <h1 className='font-semibold text-2xl'>As Featured in</h1>
      </div>

      <div className='scroll'>
        <motion.section
          className='flex w-[500%]  lg:w-[350%] gap-10 justify-evenly mt-10'
          style={{ marginLeft: `${-currentSlide * 80}%` }} // Adjusts position based on currentSlide
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {details.map((det, index) => (
            <motion.div
              key={index}
              className='flex gap-10 bg-white'
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 1 }}
              transition={{ duration: 0.6 }}
            >
              <img src={det.img1} alt='dds' className=' w-[50%] md:w-[60%] lg:w-[90%]' />

              <span className='lg:w-[322px] md:w-[400px] w-[222px] text-[#4E4E4E] py-10 px-5'>
                <img src={det.img2} alt='hch' />
                <h1 className='font-semibold text-[#212121] mb-5 mt-5'>{det.title}</h1>
                <p className='text-sm'>{det.summ}</p>

                <h2 className='uppercase mt-24'>reported by</h2>
                <p>{det.by}</p>
              </span>
            </motion.div>
          ))}
        </motion.section>
      </div>

      <main className='px-5 md:px-10 lg:px-20 mb-5 mt-20'>
        <div className='leading-10'>
          <h1 className='text-5xl text-center '>Let's build companies that <br /> help everyone succeed</h1>
        </div>

        <div className='flex justify-center mt-10 gap-10 mb-10'>
          <button className='border border-[#212121] py-2 px-8 h-[50px] w-[178px] rounded-full'>SINC with us</button>
          <button className='bg-[#303030] py-2 px-8 h-[50px] w-[178px] rounded-full text-white'>Apply to SIP 1.0</button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Feature;

