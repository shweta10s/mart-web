import React from 'react'
import { IoCall } from 'react-icons/io5'
import { FaLocationDot } from 'react-icons/fa6'
import Link from 'next/link';
import HeroOther from '../components/hero-other';
import HomeBenefits from '../components/home-benefits';
import { RiMailFill } from "react-icons/ri";
import HomeContact from '../components/home-contact';

const Page = () => {
  return (
    <>
      <HeroOther name={"Contact"} />
      <HomeContact />
      <div className="max-w-6xl md:h-full shadow-lg md:mt-[50px] mx-auto">
        <div className="rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
            width="100%"
            height={"280vh"}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />

        </div>
      </div>
        <div className="flex max-w-6xl md:h-full mx-auto md:mt-4 items-center justify-between max-md:gap-[6px]">
          <div className='flex gap-2'>
            <IoCall className="md:h-[20px] md:w-[20px] max-md:h-[16px] max-md:w-[16px] text-[#80B500] rounded-lg" />
            <Link href='' className='flex gap-4'>
              <p className='text-[#80B500] font-[500] md:text-[16px] max-md:text-[14px]'>Call Us:</p>
              <p className='text-[#667479] hover:text-[#000] font-[300] md:text-[16px] max-md:text-[14px]'>+971 06 561 5253</p>
              <p className='text-[#667479] hover:text-[#000] font-[300] md:text-[16px] max-md:text-[14px]'>+971 06 561 4112</p>
            </Link>
          </div>
          <p className='text-[#80B500] md:text-[24px]'>|</p>
          <div className='flex gap-2 '>
            <RiMailFill className=" md:h-[20px] md:w-[20px] text-[#80B500] rounded-lg" />
            <Link href='https://mail.google.com/mail/' className='flex gap-4'>
              <p className='text-[#80B500] font-[500] md:text-[16px] max-md:text-[14px]'>Email:</p>
              <p className='text-[#667479] hover:text-[#000] font-[300] md:text-[16px] max-md:text-[14px]'>sales@almubarakhypermarket.com</p>
            </Link>
          </div>
          <p className='text-[#80B500] md:text-[24px]'>|</p>

          <div className='flex gap-2 '>
            <FaLocationDot className=" md:h-[20px] md:w-[20px] max-md:h-[16px] max-md:w-[16px] text-[#80B500] rounded-lg " />
            <Link href='https://www.google.com/maps/' className='flex gap-4'>
              <p className='text-[#80B500] font-[500] md:text-[16px] max-md:text-[14px]'>Address:</p>

              <p className='text-[#667479] hover:text-[#000] font-[300] md:text-[16px] max-md:text-[14px]'>Industrial Area 4 Sharjah, UAE</p>
            </Link>
          </div>
        </div>
      <HomeBenefits />
    </>
  )
}

export default Page