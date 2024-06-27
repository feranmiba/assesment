import React from 'react'
import pic1 from '../Images/blog1.png'
import pic1s from '../Images/blog1.5.png'
import pic2 from '../Images/skit.png'
import pic2s from '../Images/blog2s.png'
import pic3s from '../Images/blog3s.png'
import Feature from './Feature'

function Blogs() {
    
    const details = [
        {
            img1: pic1,
            img2: pic1s,
            title: "Top Ten Most Powerful Startup",
            summ: "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup",
        },
        {
            img1: pic2,
            img2: pic2s,
            title: "Top Ten Most Powerful Startup",
            summ: "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup",
        },
        {
            img1: pic2,
            img2: pic3s,
            title: "Top Ten Most Powerful Startup",
            summ: "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup",
        },
    ]
  return (
    <div>

    <main className=' px-5 md:px-10 lg:px-20  mb-5 mt-28' >
    <div className=' leading-10'>
    <h1 className='text-5xl text-center '>Blogs & resources</h1>
    </div>


    <section className='flex flex-wrap lg:flex-nowrap mt-14 justify-center lg:justify-between gap-14 lg:gap-5'>


   {details.map((det) => ( <div>
    <img src={det.img1} alt='one' className='w-[100%] lg:w-[280px]'/>

    
    <div className='flex gap-10 mt-10'>
   <span className='lg:w-[280px] w-[100%]'>
    <h1>{det.title}</h1>
    <p className='text-sm'>{det.summ}</p>
    </span>

    <img src={det.img2} alt='1.5' />
    </div>
    </div>))}


    </section>
    
    </main>


    <Feature />
    </div>
  )
}

export default Blogs
