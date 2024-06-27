import React from 'react'
import Equ1 from '../Images/equ1.png'
import Equ2 from '../Images/job2.png'
import Equ3 from '../Images/job3.png'
import Equ4 from '../Images/logo4.png'
import Blogs from './Blogs'

function Equity() {

    const details = [
        {
            img: Equ1,
            title:"This company is a SAAS Startup that builds AI copy generator...",
            job: "Chief Executive officer",
            locate: "Lagos, Nigeria",
            equity: "1.2%",
            industry: "On-demand print",
            Stipend: "NGN 200,000/month",
            roletype: "Full Time",
            deadline: "24th, January 2024"
        },
        {
            img: Equ2,
            title:"This company is a SAAS Startup that builds AI copy generator.",
            job: "UX Strategist",
            locate: "Abuja, Nigeria",
            equity: "1.2%",
            industry: "E-commerce",
            Stipend: "NGN 200,000/month",
            roletype: "Full Time",
            deadline: "24th, January 2024"
        },
        {
            img: Equ3,
            title:"This company is a SAAS Startup that builds AI copy generator...",
            job: "CTO & Head of innovations",
            locate: "Abuja, Nigeria",
            equity: "1.2%",
            industry: "Fintech",
            Stipend: "NGN 200,000/month",
            roletype: "Full Time",
            deadline: "24th, January 2024"
        },
        {
            img: Equ4,
            title:"This company is a SAAS Startup that builds AI copy generator...",
            job: "Backend Developer",
            locate: "Abuja, Nigeria",
            equity: "1.2%",
            industry: "Transportation",
            Stipend: "NGN 200,000/month",
            roletype: "Full Time",
            deadline: "24th, January 2024"
        },
    ]



  return (
    <div>

    <main className=' px-5 md:px-10 lg:px-20  mb-5 mt-28' >
    <div className=' leading-10'>
    <h1 className='text-5xl text-center '>Equity jobs</h1>
    </div>

    <div className='mt-10'>
    <p className=' leading-8 text-lg text-center'>See companies and startups offering equity or a mix of cash and equity for very important position in their company</p>
    </div>

    <section className='flex gap-5 flex-wrap lg:flex-nowrap justify-center lg:justify-between mt-10 md:gap-20 lg:gap-5'>

   {details.map((det) => ( <div className='bg-white rounded-xl w-[400px]  md:w-[278px] h-[520px] pl-5 pt-5 pb-5'>
    <img src={det.img} alt='' />

    <p className='mt-5 w-[300] md:w-[224px]'>{det.title}</p>

    <h1 className='mt-5 font-semibold'>{det.job}</h1>

    <div className='flex justify-between md:gap-5 mt-5 '>
    <span>
    <label className=' uppercase text-[#8E8E8E] text-base'>Location</label>
    <p className='text-sm'>{det.locate}</p>
    </span>

    <span>
    <label className=' uppercase text-[#8E8E8E] flex justify-end text-base'>industry</label>
    <p className=' flex justify-end text-sm'>{det.industry}</p>
    </span>
    </div>

    <div className='flex justify-between md:gap-5 mt-5'>
    <span>
    <label className=' uppercase text-[#8E8E8E] flex justify-end text-base'>Equity</label>
    <p className='text-sm'>{det.equity}</p>
    </span>

    <span>
    <label className=' uppercase text-[#8E8E8E] flex justify-end text-base'>Stipend</label>
    <p className=' flex justify-end text-sm'>{det.Stipend}</p>
    </span>


    </div>
    

    <div className='flex justify-between md:gap-5 mt-5'>
    <span>
    <label className=' uppercase text-[#8E8E8E] text-base'>DeadLine</label>
    <p className='text-sm'>{det.deadline}</p>
    </span>

    <span>
    <label className=' uppercase text-[#8E8E8E] flex justify-end text-base'>Role Type</label>
    <p className=' flex justify-end text-sm'>{det.roletype}</p>
    </span>


    </div>
    
    <div className='flex justify-center'>
    <button className='bg-[#303030] cursor-pointer py-4 px-16 rounded-full text-white mt-5'>View Details</button>
    </div>
    </div>))}
    
    



    </section>
    
    
    
    </main>

    <Blogs />
      
    </div>
  )
}

export default Equity
