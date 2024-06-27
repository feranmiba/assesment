import React, { useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Select from '../Images/select.png'
import meet from '../Images/guidance_meeting-room.png'
import Negot from '../Images/negotiate.png'
import Onboard from '../Images/fluent-mdl2_onboarding.png'
import Call from '../Images/solar_call-chat-linear.png'
import Invest from './Invest'

function Join() {
  const Slide = [ 
    {
      img: Select , 
      title: "Application and Selection",
      summ1: "Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies.",
      summ2: " Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application."
    },
    {
      img: meet , 
      title: "Alignment Meeting and Proposal Submission",
      summ1: "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.",
      summ2: "  Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies."
    },
    {
      img: Negot , 
      title: "Negotiation and Agreement",
      summ1: "Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements.",
      summ2: "Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners."
    },
    {
      img: Onboard , 
      title: "Onboarding and Integration",
      summ1: "Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members.",
      summ2: " Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration."
    },
    {
      img: Call , 
      title: "Regular Check-ins and Evaluations",
      summ1: "To foster ongoing success, we've established a system for regular check-ins. These sessions will allow us to monitor your progress, gather feedback, and collectively work towards continuous improvement.",
      summ2: "We appreciate your interest in joining our EIR program and contributing to the vibrant SINC Partners community. Start your application process today and be a part of our journey in shaping the future of innovation.."
    },
  ]



  const [curr, setCurr] = useState(0)


  const prev = () => setCurr((curr) => (curr === 0 ? Slide.length : curr - 1))
  const next = () => setCurr((curr) => (curr === Slide.length - 1 ? 0 : curr + 1))

  return (
    <div>
      

    <main className=' px-5 md:px-10 lg:px-20  mb-5 mt-28'>
     
    <div className=' leading-10'>
    <h1 className='text-5xl text-center '>Join Our Entrepreneur In Residence (EIR) Program</h1>
    </div>
    <div className='mt-10 px-24'>
    <p className=' leading-8 text-lg text-center'>Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.</p>
    </div>


    <div className='scroll'>
  

    <section className='flex flex-wrap md:flex-nowrap gap-5 mt-10 transistion-transform ease-out duration-500 w-[250%]'  style={{ transform: `translateX(-${curr * 10}%)` }} >

   { Slide.map((slide) => ( 
    <div className='p-5 rounded-xl bg-white '>

    <p className='border bg-[#303030] w-[60px] h-[60px] text-center flex justify-center items-center rounded-full text-white'>
    <img src={slide.img} alt='s' />
    </p>

    <h1 className='text-[#212121] mt-5 font-semibold text-xl'>{slide.title}</h1>

    <p className='text-[#4E4E4E] mt-5'>{slide.summ1}</p>
   <p className='text-[#4E4E4E] mt-5'> {slide.summ2}
    </p>
    </div>))}


    </section>

    </div>


    <div className='flex justify-center mt-5'>
    <p className=' underline font-semibold flex gap-1'><a href='#'>Support the future</a><BsArrowRight className='mt-2 font-bold'/></p>
    </div>


    <div className='hidden md:flex justify-center mt-5 gap-10'>
    <p className='w-[60px] h-[60px] border rounded-full flex justify-center items-center text-3xl' onClick={prev}><BsArrowLeft /></p>
    <p  className='w-[60px] h-[60px] border rounded-full flex justify-center items-center text-3xl' onClick={next}><BsArrowRight /></p>
    </div>

    </main>


    <Invest />
    </div>
  )
}

export default Join
