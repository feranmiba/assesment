import React from 'react'
import NewsLetter from './NewsLetter'
import Sinc from '../Images/SINC LOGO white outline 1.png'
import Frame from '../Images/acree.png'
import Gas from '../Images/GASUS white SVG-01 1.png'
import Naija from '../Images/twemoji_flag-nigeria.png'

function Footer() {
  return (
    <div className='bg-[#212121] text-white '>
    <NewsLetter />

    <main className='px-5 md:px-10 lg:px-20'>

    <section className='flex  flex-wrap lg:flex-nowrap gap-32 lg:gap-5 md:justify-between py-5'>

    <div>
    <img src={Sinc}/>
    <p className='lg:w-[220px] text-sm mt-5 leading-6'>
    SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)
    </p>

    </div>

    <div>
    <h1 className='text-lg font-semibold'>Platforms</h1>
   <ul className='text-sm text-[#C9C9C9] gap-2 mt-5 flex flex-col'>
   <li>InResidency</li>
   <li>Service Market</li>
   <li>Founders School</li>
   <li>Metty</li>
   <li>Grantty</li>
   <li>Boldtell</li>
   <li>Chekwa</li>
   </ul>

    </div>

    <div>
    <h1 className='text-lg font-semibold'>Initiatives</h1>
   <ul className='text-sm text-[#C9C9C9] gap-2 mt-5 flex flex-col'>
   <li>Jabi Plains</li>
   <li>Local Pricing Initiative</li>
   <li>Scholar Program</li>
   <li>Metty</li>
   <li>University STEM</li>
   <li>1M Nigeria Product</li>
   <li>Founders Festival</li>
   </ul>

    </div>

    <div>
    <h1 className='text-lg font-semibold'>About us</h1>
   <ul className='text-sm text-[#C9C9C9] gap-2 mt-5 flex flex-col'>
   <li>Who we are</li>
   <li>Our people</li>
   <li>Concept Innovations</li>
   <li>Our Process</li>
   <li>Investors Network</li>
   <li>CSR & Events</li>
   <li>Contact</li>
   </ul>

    </div>
    <div className=' pr-2'>
    <h1 className='text-lg font-semibold'>More</h1>
   <ul className='text-sm text-[#C9C9C9] gap-2 mt-5 flex flex-col'>
   <li>Services</li>
   <li>Equity Jobs</li>
   <li>EIR Program</li>
   <li>Offers</li>
   <li>Innovation News</li>
   <li>FAQ</li>
   <li>Blog & Resources</li>
   </ul>

    </div>


    <div className='pl-4'>
    <h1 className='text-lg font-semibold'>Locations</h1>
   <ul className='text-small text-[#FFFF] gap-2 mt-5 flex flex-col'>
   <li>Abuja, Nigeria</li>
   <li>Lagos, Nigeria</li>
   <li>Philadephia, USA</li>

   <img src={Frame} alt='' />
   

   <li className='font-semibold'>Trusted Business</li>
   </ul>

    </div>
    
    </section>

    
    
    
    </main>


    <footer className='border-t-2'>


    <main className='px-5 md:px-10 lg:px-20'>

    <section className='flex flex-wrap md:flex-nowrap mt-10 text-sm'>
    <div>
    <p>Guaranteed 2x on your service or cash investment, usually been the first to invest. Get in early and SINC your guaranty!</p>
    <span className='flex justify-between mt-10'>
    <p>2023 SINC Partners Ltd. All rights reserved</p>

    <ul className='flex flex-wrap lg:flex-nowrap gap-5'>
    <li className='underline'>Privacy Policy</li>
    <li className='underline'>Terms of service</li>
    <li className='underline'>Security</li>
    </ul>
    </span>
    
    </div>
    <div>
   <span className='flex gap-10 mt-10 lg:mt-0'><img src={Gas} alt='gas'/> <p className='w-[400px] lg:w-[217px] h-[38px] text-sm'>We are a business built on the foundation of Christian values and belief</p></span> 
   <span>
   
   </span>
    </div>
    
    </section>
    </main>
    
    </footer>

    <div className='flex justify-center mt-5'>
    <p className='flex gap-2'>Web in Nigeria <img src={Naija} alt='vh' /></p>
    </div>


      
    </div>
  )
}

export default Footer
