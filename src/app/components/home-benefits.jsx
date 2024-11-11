import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";
import { RiRefund2Line } from "react-icons/ri";

const HomeBenefits = () => {
  return (
    <div>
        <div className='md:h-[30vh] max-w-6xl mx-auto grid grid-cols-3'>
            
        <div className='flex items-center justify-center gap-4 px-6'>
        <IoMdPricetag  className='text-[#80B500] md:text-[40px] '/>
            <div className='flex flex-col gap-2'>
                <p className='text-[#000] md:text-[18px] font-[500]'>Best Prices & Deals</p>
                <p className='text-[#667479] md:text-[16px] font-[300]'>Don’t miss our daily amazing deals and prices</p>
            </div>
        </div>

        <div className='flex items-center justify-center gap-4 px-6'>
        <RiRefund2Line  className='text-[#80B500] md:text-[40px] '/>
            <div className='flex flex-col gap-2'>
                <p className='text-[#000] md:text-[18px] font-[500]'>Refundable</p>
                <p className='text-[#667479] md:text-[16px] font-[300]'>If your items have damage we agree to refund it</p>
            </div>
        </div>

        <div className='flex items-center justify-center gap-4 px-6'>
        <FaTruckFast  className='text-[#80B500] md:text-[40px]'/>
            <div className='flex flex-col gap-2'>
                <p className='text-[#000] md:text-[18px] font-[500]'>Free Delivery</p>
                <p className='text-[#667479] md:text-[16px] font-[300]'>Do purchase over $50 and get free delivery anywhere</p>
            </div>
        </div>
        </div>
{/* <FaTruckFast /> */}

    </div>
  )
}

export default HomeBenefits