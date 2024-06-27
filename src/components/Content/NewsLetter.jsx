import React from 'react'

function NewsLetter() {
  return (
    <div className='border-b-2'>


    <main className='px-5 md:px-10 lg:px-20 mt-28 py-28'>
    <h1 className=' text-4xl lg:text-6xl'>NewsLetter</h1>
    <div className='w-[300px] lg:w-[500px] mt-5'>
    <p>Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.</p>
    </div>


    <div className='mt-14 '>
    <input type='email' placeholder='email' className='border border-[#676767] bg-transparent w-[258px] lg:w-[468px] h-[50px] rounded-l-full px-5 outline-none'/><button className='w-[150px] -ml-10 h-[50px] bg-white top-[1px] left-[320px] text-[#212121] rounded-full font-bold'>Subscribe</button>
    </div>
    
    </main>
    
    </div>
  )
}

export default NewsLetter
