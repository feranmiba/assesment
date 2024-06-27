import React from 'react'
import Model from './Model'

function Area() {
  return (
    <div>
      

    <section className=' px-5 md:px-10 lg:px-20 mb-5 mt-28'>
    
    <div className='px'>
    <h1 className='text-5xl text-center leading-10 '>Network of builders helping startup scale</h1>
    </div>

    <div className='mt-10'>
    <p className=' leading-8 text-lg text-center'>In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab</p>
    </div>

    <section className='flex flex-wrap justify-center mt-10 text-white md:flex-nowrap'>
    <div className='bg-[#303030] pl-5 pr-7 w-[50%] md:w-[25%] py-3'>
    <h1>01</h1>
    <p className='mt-14 w-[60%]'>Business Support & Incubation</p>
    </div>
    <div className='bg-[#F47733] pl-5 pr-7 w-[50%] md:w-[25%] py-3'>
    <h1>02</h1>
    <p className='mt-14  w-[60%]'>On-Demand & As-A-Service</p>
    </div>
    <div className='bg-[#FF78BF] pl-5 pr-7 w-[50%] md:w-[25%] py-3'>
    <h1>03</h1>
    <p className='mt-14  w-[60%]'>Marketplace & Crowdsourcing</p>
    </div>
    <div className='bg-[#20888F] pl-5 pr-7 w-[50%] md:w-[25%] py-3'>
    <h1>04</h1>
    <p className='mt-14  w-[60%]'>Aggregation & Shared Economy</p>
    </div>
   
    </section>
    
    </section>

    <section className=' px-5 md:px-10 lg:px-28 mb-5 mt-28'>

    <div className='px'>
    <h1 className='text-5xl text-center leading-10 '>Our Concept Innovations</h1>
    </div>
   
   
    <div className='mt-10'>
    <p className=' leading-7 text-base text-center px-10 md:px-20'>We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;</p>
    </div> 


    <section className='flex flex-wrap mt-10 justify-around gap-10 md:flex-nowrap'>

    <div className='rounded-xl bg-white py-5 px-4 text-start md:text-center'>
    <h1 className='text-[#212121] font-semibold text-xl'>Service Incubator</h1>

    <p className='mt-12'>A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP</p>
    </div>
    <div className='rounded-xl bg-white py-5 px-4 text-start md:text-center'>
    <h1 className='text-[#212121] font-semibold text-xl'>Virtualting</h1>

    <p className='mt-12'>A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource</p>
    </div>
    <div className='rounded-xl bg-white py-5 px-4 text-start md:text-center'>
    <h1 className='text-[#212121] font-semibold text-xl'>Diiming</h1>

    <p className='mt-12'>A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice </p>
    </div>
    
    </section>
    
    </section>


    <Model />

    </div>
  )
}

export default Area
