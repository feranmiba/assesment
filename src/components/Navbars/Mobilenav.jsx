import React, { useState } from 'react'
import { BsMenuButton, BsX } from 'react-icons/bs'
import Logo from '../Images/SINC LOGO black outline 1.png'
import { AnimatePresence, motion } from 'framer-motion'


function Mobilenav() {
    const [showModal, setShowModal] = useState(Boolean)
 

  const visibility = () => {
    setShowModal(!showModal)
  }
  return (
    <div className='fixed top-0 left-0 right-0 lg:hidden py-5 bg-gray-100 shadow-md'>

    <section className='flex justify-between px-8'>
    <div>
    <img src={Logo} alt='logo' width={80}/>
    </div>



    <div>
  <p onClick={visibility}> <BsMenuButton   className='text-2xl'/></p>  
    </div>
    
    </section>

    <AnimatePresence mode='wait' initial={false}>
    
    
      {
        showModal && (
            <motion.main
            initial={{
                x: 500
              }}
              animate={{
                x: 0
              }}
              exit={{
                x: 500
              }}
              transition={{
                delay: 0.2,
                type: "tween",
                stiffness: 100,
                duration: 0.8
              }}
               className="top-0 fixed z-50  bg-[#F9F9F9] px-10 py-3 w-[100%]"
            >
            <p className='text-3xl cursor-pointer mb-2' onClick={visibility}><BsX /></p>
            <ul className='flex gap-4 flex-col py-2 text-lg font-medium cursor-pointer'>
            <li>About</li>
            <li>SIP</li>
            <li>Studio</li>
            <li>SEEQ</li>
            <li>Platforms</li>
            <li>Initiative</li>
            <li>More</li>
            </ul>
            <div className='flex  flex-col gap-8 mt-5'>
            <button className='text-white bg-[#20888F] rounded-full py-4 px-6'>SINC With us</button>
            <button className='text-white bg-[#303030] rounded-full py-4 px-6'>Apply to SIP 1.0</button>
            </div>
            
            
            </motion.main>
        )
      }
      </AnimatePresence>
    </div>
  )
}

export default Mobilenav
