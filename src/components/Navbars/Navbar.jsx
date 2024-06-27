import React from 'react'
import Logo from '../Images/SINC LOGO black outline 1.png'
import Mobilenav from './Mobilenav'

function Navbar() {
  return (
    <div className=' py-5 bg-[#F9F9F9]'>
    <Mobilenav />

      <div className='hidden lg:block lg:fixed top-0 left-0 right-0 z-50 py-3 bg-gray-100'>
    <section className=' flex justify-between px-14'>
    <div className='flex gap-5 '>
    <img src={Logo} alt='logo' width={80}/>
    <ul className='flex gap-5 py-2 font-medium cursor-pointer'>
    <li>About</li>
    <li>SIP</li>
    <li>Studio</li>
    <li>SEEQ</li>
    <li>Platforms</li>
    <li>Initiative</li>
    <li>More</li>
    </ul>
    </div>
      <div className='flex gap-10'>
      <button className='text-white bg-[#20888F] rounded-full py-4 px-6'>SINC With us</button>
      <button className='text-white bg-[#303030] rounded-full py-4 px-6'>Apply to SIP 1.0</button>
      </div>
      </section>
      </div>
    </div>
  )
}

export default Navbar
