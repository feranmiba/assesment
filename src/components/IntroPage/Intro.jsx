import React, { useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import pic from '../Images/intro.png'
import stu from '../Images/stu.png'
import hero from '../Images/hero.png'
import News from './News'

function Intro() {
  const [currentSlide, setCurrentSlide] = useState(0); 

  const details = [
    {
      id: 1, 
      img: pic,
      title: "SINC Partners is a service incubation company",
      summ: "Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)."
    },
    {
      id: 2, 
      img: hero,
      title: "Come with an idea, leave with a company.",
      summ: "You, alongside seasoned service partners and investors, expedite the growth and market entry of your startup."
    },
    {
      id: 3, 
      img: stu,
      title: "We are big on these 3 things",
      summ: "✓ Service Incubation & Ecosystem Advocacy ✓ Building SAAS & Marketing Tech Platforms✓ Institutional Innovations"
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
      {details.map((det, index) => (
        <motion.section
          key={det.id}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: index === currentSlide ? 1 : 0.6 }}
          transition={{ duration: 1.2 }}
          className={`flex flex-wrap-reverse justify-center  gap-14 md:flex-nowrap bg-white shadow ${index === currentSlide ? 'block' : 'hidden'}`}
        >
          <div className='text-center md:text-start  md:ml-[40px] lg:ml-[120px] mt-10 lg:mt-24 md:w-[90%] lg:w-[491px] h-[250px]'>
            <h1 className='font-bold  md:leading-6 lg:leading-8  text-3xl lg:text-3xl md:text-2xl'>{det.title}</h1>
            <p className='leading-8 mt-2 md:mt-0'>{det.summ}</p>
            <button className='px-8 py-4 md:py-2 md:px-6lg:py-4 lg:px-8 bg-[#303030] text-white rounded-full mt-5 lg:mt-10'>SINC With us</button>
          </div>
          <div>
            <img src={det.img} alt='pic' />
          </div>
        </motion.section>
      ))}
      <section className='px-5 md:px-44 mt-10'>
        <div className='bg-white px-6 py-8 shadow-md border mt-3 mb-3 rounded-3xl text-center'>
          <p className='text-lg leading-8'>"Nigeria and Africa has a massive network effect that have not be fully utilized. With Nigerians/Africans in every country and territory of the world, we can scale an African business to 100+ countries in few weeks"</p>
          <h3 className='mt-5 font-semibold'>Daniel Izeghs Oratokhai</h3>
          <h3 className='mt-1'>Managing Partner at SINC Partners Ltd</h3>
        </div>
      </section>


      <News />
    </div>
  );
}

export default Intro;