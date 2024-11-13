import React from 'react'
import { FaStar } from "react-icons/fa";

const HomeClients = () => {
    const par= [
        {
          image:"assets/images/client1.avif",
          name:"Ahmed Saeed",
          pos:"Co Founder",
          review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        },
        {
          image:"assets/images/client2.avif",
          name:"Ahmed Saeed",
          pos:"Co Founder",
          review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        },
        {
          image:"assets/images/client3.avif",
          name:"Ahmed Saeed",
          pos:"Co Founder",
          review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        }
      ]
  return (
    <div>
         <div className='md:h-[85vh] max-w-6xl mx-auto'>
                  <p className='text-[#80B500] font-[500] md:text-[40px] max-md:text-[24px] text-center'>Client Review</p>
                  <p className='text-[#000A2D] text-center md:text-[24px] max-md:text-[12px] md:leading-[28.8px] font-[300]'>The honest revie from our client</p>
                    <img 
                    className='md:h-[12vh] md:mt-2 mx-auto'
                    src="assets/images/review.png" 
                    alt="No Preview" />

                    <div className="md:w-full mx-auto md:h-[42vh] max-md:h-[30vh] flex md:gap-4 max-md:gap-2 mt-[70px]"
                 >
                    {
                        par.map((ele,i) => (
                            <div key={i} className='md:w-[380px] max-md:w-[300px] h-full relative md:rounded-[8px] max-md:rounded-[8px] bg-[#F3F3F3] shadow-lg flex flex-col items-center justify-center md:px-2'>
                               <div className='bg-black md:h-16 md:w-16 rounded-full border-4 border-[#FFF] absolute -top-8 left-[40%]'>
                                <img 
                                src={ele.image}
                                alt='No Preview'
                                className='object-cover h-full w-full rounded-full'
                                />
                               </div>
                              <p className='text-[#000] font-[500] md:text-[24px] text-center'>{ele.name}</p>
                              <p className='text-[#667479] md:text-[16px] font-[400] text-center'>{ele.pos}</p>
                              <p className='text-[#667479] font-[300] md:text-[16px] md:leading-[28px] text-center md:mt-[24px]'>{ele.review}</p>
                              <div className='flex gap-2 items-center md:mt-3'>
                              <FaStar className='text-[#FFD43A] md:text-[22px]' />
                              <FaStar className='text-[#FFD43A] md:text-[22px]' />
                              <FaStar className='text-[#FFD43A] md:text-[22px]' />
                              <FaStar className='text-[#FFD43A] md:text-[22px]' />
                              <FaStar className='text-[#FFD43A] md:text-[22px]' />
                              </div>
                            </div>

                        ))
                    }

                    </div>
                </div>
    </div>
  )
}

export default HomeClients
