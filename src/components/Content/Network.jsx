import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Area from './Area'

function Network() {
  return (
    <div>

   <main className=' px-5 md:px-10 lg:px-20 mt-28'>
    <div className='px'>
    <h1 className='text-5xl text-center leading-10 '>Network of builders helping startup scale</h1>
    </div>
      <section className='flex flex-wrap md:flex-nowrap justify-around gap-10 mt-10 '>

      <div className='rounded-xl p-6 bg-white'>
      <h1 className='font-semibold text-base'>Work with Service Incubators to expedite your time-to-market</h1>
      <p className='mt-3 leading-8'>Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building. <br/>
      <b className='mt-3 text-[#4E4E4E]'>  For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.</b></p>

      <p className=' underline text-[#4E4E4E] mt-2 flex gap-1 font-bold'><a href='#'>Learn more</a> <BsArrowRight className='mt-2'/></p>
      </div>

      <div className='rounded-xl p-6 bg-white'>
      <h1 className='font-semibold text-base'>Access funding after your mvp is validated </h1>
      <p className='mt-3 leading-8'>Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape. <br/>
      <b className='mt-3 text-[#4E4E4E]'>Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months </b></p>
      <p className=' underline text-[#4E4E4E] mt-8 flex gap-1 font-bold'><a href='#'>Learn more</a> <BsArrowRight className='mt-2'/></p>
      </div>
      
      
      </section>
    </main>


    <Area />

    </div>
  )
}

export default Network
