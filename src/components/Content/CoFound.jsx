import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Join from './Join'

function CoFound() {
  return (
    <div>

    <main className=' px-5 md:px-10 lg:px-20  mb-5 mt-28'>

    <div className=' leading-10'>
    <h1 className='text-5xl text-center '>Co-found With Us</h1>
    </div>

    <div className='mt-10'>
    <p className=' leading-8 text-lg text-center'>We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed </p>
    </div>


    <section className='flex flex-wrap md:flex-nowrap gap-5 mt-10'>
    
    <div className='p-5 rounded-xl bg-white'>

    <p className='border bg-[#303030] w-[60px] h-[60px] text-center flex justify-center items-center rounded-full text-white'>
    <h1>1</h1>
    </p>

    <h1 className='text-[#212121] mt-5 font-semibold text-xl'>We Ideate</h1>

    <p className='text-[#4E4E4E] mt-5'>We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.</p>
    </div>

    <div className='p-5 rounded-xl bg-white'>

    <p className='border bg-[#F47733] w-[60px] h-[60px] text-center flex justify-center items-center rounded-full text-white'>
    <h1>2</h1>
    </p>

    <h1 className='text-[#212121] mt-5 font-semibold text-xl'>You Validate</h1>

    <p className='text-[#4E4E4E] mt-5'>You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions </p>
    </div>


    <div className='p-5 rounded-xl bg-white'>

    <p className='border bg-[#FF78BF] w-[60px] h-[60px] text-center flex justify-center items-center rounded-full text-white'>
    <h1>3</h1>
    </p>

    <h1 className='text-[#212121] mt-5 font-semibold text-xl'>You Co-own</h1>

    <p className='text-[#4E4E4E] mt-5'>After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.
    </p>
    </div>
    
    </section>
    
    <div className='flex justify-center mt-5'>
    <p className=' underline font-semibold flex gap-1'><a href='#'>Build your dream</a><BsArrowRight className='mt-2 font-bold'/></p>

    </div>
    
    </main>


      <Join />
    </div>
  )
}

export default CoFound
