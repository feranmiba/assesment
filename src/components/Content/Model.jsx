import React from 'react'
import Polygon from '../Images/Polygon.png'
import Polygon1 from '../Images/Polygons.png'
import Polygon2 from '../Images/Polygones.png'
import { BsArrowRight } from 'react-icons/bs'
import Portfolio from './Portfolio'

function Model() {
  return (
    <div>
      

    <section className=' px-5 md:px-10 lg:px-20  mb-5 mt-28'>
    <div className='leading-8 '>
    <h1 className='text-5xl text-center '>Our Service Incubation Model</h1>
    </div>

    <div className='mt-10'>
    <p className=' leading-7 text-base text-center px-14'>The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as been first to invest.</p>
    </div>



    <main className='mt-10'>
    <div>
    <h1 className='font-bold text-lg'>Hypothesis</h1>
    <p className='mt-5'>Just a few reasons we know its time for this model within the ecosystem</p>
    </div>


    <section className='flex flex-wrap mt-10 justify-center gap-10 md:flex-nowrap'>
    
    <div className='rounded-xl bg-white py-5 px-4 text-start md:text-center'>
    <img src={Polygon} alt='' />

    <p className='mt-12'>Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support</p>
    </div>

    <div className='rounded-xl bg-white py-5 px-4 text-start md:text-center'>
    <img src={Polygon1} alt='' />

    <p className='mt-12'>If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment    </p>
    </div>

    <div className='rounded-xl bg-white py-5 px-4  text-start md:text-center'>
    <img src={Polygon2} alt='' />

    <p className='mt-12'>Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return</p>
    </div>
    
    
    </section>

    <div className='mt-10'>
    <h1 className='font-bold text-lg'>Case Study</h1>
    <p className='mt-5'>See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time</p>
    </div>

    <section className='flex flex-wrap md:flex-nowrap gap-10 mt-5'>
    <p className='bg-[#FFFFFF] py-3 px-8 rounded-full border border-[#A4A4A4]'>Service Incubator Equity</p>
    <p className='bg-[#FFFFFF] py-3 px-8 rounded-full border border-[#A4A4A4]'>Service Incubator Equity</p>
    <p className='bg-[#FFFFFF] py-3 px-8 rounded-full border border-[#A4A4A4]'>Service Incubator Equity</p>
    </section>




                <div className='flex justify-center mt-5'>
                <p className=' underline font-semibold flex gap-1'><a href='#'>Become A Service Incubator</a><BsArrowRight className='mt-2 font-bold'/></p>

                </div>

    </main>

    </section>

    <Portfolio />
    </div>
  )
}

export default Model
