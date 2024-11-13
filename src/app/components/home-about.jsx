import Image from 'next/image'
import React from 'react'

const HomeAbout = () => {
  return (
    <div className='md:h-[80vh] max-md:h-[80vh] md:w-full relative'>
        <div className='md:h-[60vh] max-md:h-[46vh] w-full'>
        </div>
        <div className='md:h-[20vh] max-md:h-[32vh] w-full bg-[#FF7D09]'>
        </div>
        <div className='absolute top-[5vh] left-0 md:h-[70vh] w-full flex '>

           <div className='max-w-6xl mx-auto flex bg-[#FFF] shadow-lg rounded-[12px] max-md:w-[90%]'>
           <div className="left md:w-[40%] md:h-full flex justify-center items-center">
               <div className='relative md:h-[90%] md:w-[90%] max-md:hidden'>
               <div className='md:w-[95%] max-md:w-[90%] md:h-[95%] max-md:h-[90%] border-4 border-[#80B500] absolute top-0 left-0 md:rounded-[4px]'>
                </div>
                <img
                src='assets/images/homeAbout.jpeg'
                alt=''
                className='md:h-[95%] md:w-[95%] object-cover bottom-0 right-0 absolute md:rounded-[4px]'
                />
               </div>
            </div>
            <div className="right md:w-[60%] md:h-full px-4 py-4">
                <p className='text-[#80B500] md:text-[40px] max-md:text-center max-md:text-[24px] font-[500] md:leading-[50px]'>About</p>
                <p className='text-[#667479] md:text-[20px] max-md:text-[14px] font-[300] max-md:mt-2'>Al Mubarak group of companies was started in 1978 in UAE with an opening of departments store in AL AQUA, AL AIN. It was an outcome of hard work of Mr.Kunchi Muhammad and KV Maharoof, founder and chairman of Mubarak group. Currently Mubarak group have more than 10 outlets in all over the UAE as well sultanate of Oman. Initially we concentrated only in alqua, AL AIN. But, later on we moved to different parts of the UAE during our expansion stage. Now with the grace of Allah, in 2013, we penetrated to hypermarket field which is located in Ajman, new industrial area. We have also some diversified business which was started in 2008 in restaurant business in al ain. Since its initial stage we’ve been dedicated to making a difference in the lives of our customer valued customers. We are helping people live better in more ways than ever before.</p>
            </div>
           </div>
        </div>
    </div>
  )
}

export default HomeAbout