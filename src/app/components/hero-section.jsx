"use client"

import Image from 'next/image'
import React from 'react'
// import { useDispatch } from 'react-redux'
// import { openModal } from '../redux/slice/popupSlice';

const HeroSection = () => {
//   const dispatch = useDispatch();
//   const handleOpen = () => (
//     dispatch(openModal())
//   )
    return (
        <>
            <div className="relative md:h-[30vw] max-md:h-[36vh] text-white overflow-hidden">
              <div className="absolute inset-0">
                <Image 
                  src="/assets/images/grocery.png"
                  alt="Background Image"
                  fill
                  className="object-cover object-center w-full h-full"
                />
                <div className="absolute inset-0 bg-[#3838387a]" />
              </div>
              <div className="relative max-w-6xl mx-auto z-10 flex flex-col items-center justify-center h-full text-center max-md:px-2">
                <div className="font-medium md:text-center max-md:text-center flex flex-col justify-center items-center">
                  
                  <p className="md:w-[70%] text-center md:text-[64px] max-md:text-[26px] font-[700]">{`DON'T MISS OUR DAILY AMAZING DEALS.`}</p>
                 <button 
                //   onClick={handleOpen} 
                  className='md:py-[14px] max-md:py-[10px] md:px-[28px] max-md:px-[14px] md:mt-[30px] max-md:mt-[10px] max-md:text-[16px] border border-[#FF7D09] bg-[#FF7D09] hover:bg-[#FFF] hover:text-[#FF7D09] text-[#FFF] md:rounded-[16px] max-md:rounded-[20px]'>
                  Contact Us
                </button>
                  
                </div>
              </div>
            </div>
        </>
    )
}

export default HeroSection