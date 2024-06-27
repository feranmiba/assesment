import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import CoFound from './CoFound'
import Logo1 from '../Images/kofundme.png'
import Logo2 from '../Images/Founder.png'
import Logo3 from '../Images/bujnews.png'
import Logo4 from '../Images/stuwok.png'
import Logo5 from '../Images/Ontecx-Logo-PNG-300x88 1.png'
import Logo6 from '../Images/Ontecx-Logo-PNG-300x88 1 (1).png'
import Logo7 from '../Images/Ontecx-Logo-PNG-300x88 1 (2).png'
import Logo8 from '../Images/Ontecx-Logo-PNG-300x88 1 (3).png'
import Logo9 from '../Images/GASUS BUSINESS2.png'
import Logo10 from '../Images/No10.png'
import Logo11 from '../Images/No11.png'
import Logo12 from '../Images/No12.png'
import Logo13 from '../Images/No13.png'
import Logo14 from '../Images/No14.png'
import Logo15 from '../Images/No15.png'
import Logo16 from '../Images/No16.png'
import Logo17 from '../Images/No17.png'
import Logo18 from '../Images/No18.png'
import Logo19 from '../Images/No19.png'
import Logo20 from '../Images/No20.png'
import Logo21 from '../Images/No21.png'
import Logo22 from '../Images/No22.png'
import Logo23 from '../Images/No23.png'
import Logo24 from '../Images/No24.png'
import Logo25 from '../Images/No25.png'
import Logo26 from '../Images/No26.png'
import Logo27 from '../Images/No27.png'
import Logo28 from '../Images/No28.png'
import Logo29 from '../Images/No29.png'
import Logo30 from '../Images/No30.png'
import Logo31 from '../Images/No31.png'
import Logo32 from '../Images/No32.png'
import Logo33 from '../Images/No33.png'
import Logo34 from '../Images/No34.png'
import Logo35 from '../Images/No35.png'
import Logo36 from '../Images/No36.png'
import Logo37 from '../Images/No37.png'
import Logo38 from '../Images/No38.png'
import Logo39 from '../Images/No39.png'
import Logo40 from '../Images/No40.png'
import Logo41 from '../Images/No41.png'
import Logo42 from '../Images/No42.png'
import Logo43 from '../Images/No43.png'
import Logo44 from '../Images/No44.png'
import Logo45 from '../Images/No45.png'
import Logo46 from '../Images/No46.png'
import Logo47 from '../Images/No47.png'
import Logo48 from '../Images/No48.png'









function Portfolio() {

    const images = [
        {
            id: 1, 
            img: Logo1
        },
        {
            id: 2, 
            img: Logo2
        },
        {
            id: 3, 
            img: Logo3
        },  {
            id: 4, 
            img: Logo4
        },  {
            id: 5, 
            img: Logo5
        },  {
            id: 6, 
            img: Logo6
        },  {
            id: 7, 
            img: Logo7
        },  {
            id: 8, 
            img: Logo8
        },  {
            id: 9, 
            img: Logo9
        },  {
            id: 1, 
            img: Logo10
        },  {
            id: 1, 
            img: Logo11
        },  {
            id: 1, 
            img: Logo12
        },
        {
            id: 13, 
            img: Logo13
        },
        {
            id: 14, 
            img: Logo14
        },
        {
            id: 15, 
            img: Logo15
        },
        {
            id: 16, 
            img: Logo16
        },
        {
            id: 17, 
            img: Logo17
        },
        {
            id: 18, 
            img: Logo18
        },
        {
            id: 19, 
            img: Logo19
        },
        {
            id: 20, 
            img: Logo20
        },
        {
            id: 21, 
            img: Logo21
        },
        {
            id: 22, 
            img: Logo22
        },
        {
            id: 23, 
            img: Logo23
        },
        {
            id: 24, 
            img: Logo24
        },
        {
            id: 25, 
            img: Logo25
        },
        {
            id: 25, 
            img: Logo26
        },
        {
            id: 25, 
            img: Logo27
        },
        {
            id: 25, 
            img: Logo28
        },
        {
            id: 25, 
            img: Logo29
        },
        {
            id: 25, 
            img: Logo30
        },
        {
            id: 25, 
            img: Logo31
        },
        {
            id: 25, 
            img: Logo32
        },
        {
            id: 25, 
            img: Logo33
        },
        {
            id: 25, 
            img: Logo34
        },
        {
            id: 25, 
            img: Logo35
        },
        {
            id: 25, 
            img: Logo36
        },
        {
            id: 25, 
            img: Logo37
        },
        {
            id: 25, 
            img: Logo38
        },
        {
            id: 25, 
            img: Logo39
        },
        {
            id: 25, 
            img: Logo40
        },
        {
            id: 25, 
            img: Logo41
        },
        {
            id: 25, 
            img: Logo42
        },
        {
            id: 25, 
            img: Logo43
        },
        {
            id: 25, 
            img: Logo44
        },
        {
            id: 25, 
            img: Logo45
        },
        {
            id: 25, 
            img: Logo46
        },
        {
            id: 25, 
            img: Logo47
        },
        {
            id: 25, 
            img: Logo48
        },
    ]




  return (
    <div>
      


    <main  className=' px-5 md:px-10 lg:px-20  mb-5 mt-28'>

     <div className='px'>
    <h1 className='text-5xl text-center leading-8 '>Our Studio Portfolio</h1>
    </div>

    <div className='mt-10'>
    <p className=' leading-7 text-base text-center px-14'>Our 2024 Service Incubator Portfolio Companies</p>
    </div>

    <section className='flex flex-wrap justify-between mt-10'>
    {images.map( (img) => (<div className='bg-[#FFFFFF] border border-[#E9E9E9] rounded-lg px-5 py-3 mt-5'>
    <img src={img.img} alt='ff'/>
    </div>))}


    </section>

    <div className='flex justify-center mt-14'>
    <p className=' underline font-semibold flex gap-1'><a href='#'>View all companies</a><BsArrowRight className='mt-2 font-bold'/></p>

    </div>
    
    
    </main>



    <CoFound />

    </div>
  )
}

export default Portfolio
