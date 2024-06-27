import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import Equity from './Equity';

function Invest() {


    const FirstDeal = [
        {
            id: "Deal 1",

            what: [
                {
                    mess: "Idea stage", price: "$5k for 5% Equity"
                },
                {
                    mess: " Expected Revenue at This Stage:", price: " $0/mth"
                },
                {
                    mess: " Duration of Raise:", price: ": 1mth"
                },
                {
                    mess: " Who Can Invest: ", price: "eople with Domain Expertise and Advisors  "
                }
            ]
        },

        {
            id: "Deal 2",

            what: [
                {
                    mess: "Idea stage", price: "$5k for 5% Equity"
                },
                {
                    mess: " Expected Revenue at This Stage:", price: " $0/mth"
                },
                {
                    mess: " Duration of Raise:", price: ": 1mth"
                },
                {
                    mess: " Who Can Invest: ", price: "eople with Domain Expertise and Advisors  "
                }
            ]
        },

        {
            id: "Deal 3",

            what: [
                {
                    mess: "Idea stage", price: "$5k for 5% Equity"
                },
                {
                    mess: " Expected Revenue at This Stage:", price: " $0/mth"
                },
                {
                    mess: " Duration of Raise:", price: ": 1mth"
                },
                {
                    mess: " Who Can Invest: ", price: "eople with Domain Expertise and Advisors  "
                },

                 {
            id: "Deal 2",

            what: [
                {
                    mess: "Idea stage", price: "$5k for 5% Equity"
                },
                {
                    mess: " Expected Revenue at This Stage:", price: " $0/mth"
                },
                {
                    mess: " Duration of Raise:", price: ": 1mth"
                },
                {
                    mess: " Who Can Invest: ", price: "eople with Domain Expertise and Advisors  "
                }
            ]
        },
            ]
        },
    ]

    const SecondDeal = [
        {
            id: "Deal 5",

            what: [
                {
                    mess: "Idea stage", price: "$5k for 5% Equity"
                },
                {
                    mess: " Expected Revenue at This Stage:", price: " $0/mth"
                },
                {
                    mess: " Duration of Raise:", price: ": 1mth"
                },
                {
                    mess: " Who Can Invest: ", price: "eople with Domain Expertise and Advisors  "
                }
            ]
        },

        {
            id: "Deal 6",

            what: [
                {
                    mess: "Idea stage", price: "$5k for 5% Equity"
                },
                {
                    mess: " Expected Revenue at This Stage:", price: " $0/mth"
                },
                {
                    mess: " Duration of Raise:", price: ": 1mth"
                },
                {
                    mess: " Who Can Invest: ", price: "eople with Domain Expertise and Advisors  "
                }
            ]
        },

        {
            id: "Deal 7",

            what: [
                {
                    mess: "Idea stage", price: "$5k for 5% Equity"
                },
                {
                    mess: " Expected Revenue at This Stage:", price: " $0/mth"
                },
                {
                    mess: " Duration of Raise:", price: ": 1mth"
                },
                {
                    mess: " Who Can Invest: ", price: "eople with Domain Expertise and Advisors  "
                },

                 {
            id: "Deal 7",

            what: [
                {
                    mess: "Idea stage", price: "$5k for 5% Equity"
                },
                {
                    mess: " Expected Revenue at This Stage:", price: " $0/mth"
                },
                {
                    mess: " Duration of Raise:", price: ": 1mth"
                },
                {
                    mess: " Who Can Invest: ", price: "eople with Domain Expertise and Advisors  "
                }
            ]
        },
            ]
        },

      
    ]
  return (
    <div>
    
    <main className=' px-5 md:px-10 lg:px-14  mb-5 mt-28' >
    <div className=' leading-10'>
    <h1 className='text-5xl text-center '>SINC Investors Network</h1>
    </div>
    <div className='mt-10 px-5 md:px-16'>
    <p className=' leading-7 text-base md:text-lg text-center'>Our deals are structured not just to take in investments but to onboard owners passionate about our solutions. Our portfolio companies are valued at $50k at start, with these low valuation, you are guaranteed at least 2x-5x, usually been the first to invest. </p>
    <p className=' leading-7 text-base md:text-lg text-center mt-2'> <b className='text-[#4E4E4E]'>Disclaimer:</b> These deal flows is a statement of our projections and may differ from stage to stage and from venture to venture and the guarantee is for deal 1, usually the first to invest</p>

    </div>

    <section className='mt-10'>

    <div className='text-center md:text-start'>
    <p className=' text-xl'><b>Micro Angel Investors & Service incubators </b>(Invest from $500 & above)</p>
    </div>

    <section className='flex justify-center  flex-wrap md:flex-nowrap  mt-5'>

   {FirstDeal.map((deal) =>( <div className='border-t   md:border-r   border-b border-[#A4A4A4] py-5  px-2 w-[100%] md:w-[380px] h-[250px]'>
    <h1>{deal.id}</h1>
   {deal.what.map((what) => ( <ul className='mt-3'>
    <li className='flex text-sm'><AiOutlineCheck  className='mt-1'/>{what.mess}<b>{what.price}</b></li>
    </ul>))}
    </div>))}


    <div className=' border-t  md:border-l   md:border-b border-[#A4A4A4] py-5  px-2 w-[100%] md:w-[380px] h-[250px]'>
    <h1>Deal 4</h1>
   <ul className='mt-3'>
    <li className='flex text-sm'><AiOutlineCheck  className='mt-1'/>Traction Stage:<b>$125 worth of service of Equity</b></li>
    <li className='flex text-sm'><AiOutlineCheck  className='mt-1'/>Expected Revenue at this stage:<b>$5/month</b></li>
    <li className='flex text-sm'><AiOutlineCheck  className='mt-1'/>Duration of raise:<b>6 - 12 months</b></li>
    <li className='flex text-sm'><AiOutlineCheck  className='mt-1'/>Who can invest:<b>Media, Influencers, celebrity</b></li>
    </ul>
    </div>
    

    
    </section>


    <div className='mt-8 text-center md:text-start'>
    <p className=' text-xl'><b>Angel Investors & Venture Capital </b> (Invest from $50k and above) </p>
    </div>


    <section className='flex justify-center  flex-wrap md:flex-nowrap  mt-5'>

    {SecondDeal.map((deal) =>( <div className=' border-t  md:border-r   border-b border-[#A4A4A4] py-5  px-2 w-[100%] md:w-[380px] h-[250px]'>
     <h1>{deal.id}</h1>
    {deal.what.map((what) => ( <ul className='mt-3'>
     <li className='flex text-sm'><AiOutlineCheck  className='mt-1'/>{what.mess}<b>{what.price}</b></li>
     </ul>))}
     </div>))}

     <div className=' md:border-b border-t border-[#A4A4A4] py-5  px-2 w-[100%] md:w-[380px] h-[250px]'>
     <div className='bg-[#101010] py-4 px-5'>
     <h1 className='text-xl text-[white]'>Work with Service Incubators (SINC) to expedite your time to market</h1>
     <button className='bg-[#303030] py-4 px-8 rounded-full text-white mt-3'>Join SINC Networks </button>
     </div>
     </div>
     
 
     
     </section>
    
    
    
    
    </section>
    
    
    
    
    </main>

    <Equity />
    </div>
  )
}

export default Invest
