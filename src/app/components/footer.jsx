import Link from 'next/link'
import React from 'react'
// import { IoLogoInstagram } from "react-icons/io5";
// import { AiFillFacebook } from "react-icons/ai";
// import { SiTelegram } from "react-icons/si";
// import { MdEmail } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { TiLocation } from "react-icons/ti";
import { IoCall } from 'react-icons/io5'
import { FaLocationDot } from 'react-icons/fa6'
import { RiMailFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";



const Footer = () => {
    return (
        <div>
            <footer className='footer md:mt-[30px] w-full h-full md:pb-[30px] max-md:mt-[30px] max-md:py-4 '>
                <div className='max-w-6xl max-md:px-6 flex mx-auto md:pt-[30px] border-t-4 border-[#80B500]'>
                    <div className="w-full h-full grid md:grid-cols-3 justify-between items-start md:mb-[30px] max-md:gap-[8px]">
                        <div className="col-1 flex flex-col md:gap-[10px] max-md:gap-[10px] items-start">
                            <div className="h-full flex">
                                <Link
                                    href="/">
                                    <img
                                        src="/assets/images/logo.png"
                                        className="md:h-10 max-md:h-6 md:my-2 max-md:mt-4"
                                        alt="Logo"
                                    />

                                </Link>
                            </div>

                            <h1 className='font-[500] md:text-[18px] max-md:text-[16px] pr-6 text-[#667479]'>Al Mubarak group of companies was started in 1978 in UAE with an opening of departments store in AL AQUA, AL AIN.</h1>


                        </div>
                        <div className="col-23 grid grid-cols-2 md:mb-[30px] max-md:gap-4 i
                        o max-md:py-4">
                            <div className="col-2 flex flex-col md:gap-[24px] max-md:gap-[10px] ">
                                <h2 className='text-[#80B500] font-[600] md:text-[24px] max-md:text-[20px]'>Quick Links</h2>
                                <div className="menu-cont flex flex-col items-left md:gap-[18px] max-md:gap-[6px]">
                                    <Link href='/' className='md:text-[16px] max-md:text-[16px] font-[400] text-[#667479] hover:text-[#80B500]'>Home</Link>

                                    <Link href={'/categories'} className='md:text-[16px] max-md:text-[16px] font-[400] text-[#667479] hover:text-[#80B500]'>Categories</Link>

                                    <Link href='/about-us' className='md:text-[16px] max-md:text-[16px] font-[400] text-[#667479] hover:text-[#80B500]'>About Us</Link>

                                    <Link href='/contact-us' className='md:text-[16px] max-md:text-[16px] font-[400] text-[#667479] hover:text-[#80B500]'>Contact Us</Link>
                                </div>
                            </div>
                            <div className="col-3 max-md:pl-10 flex flex-col md:gap-[24px] max-md:gap-[10px] ">
                                <h2 className='text-[#80B500] font-[600] md:text-[24px] max-md:text-[20px]'>Support</h2>
                                <div className="menu-cont flex flex-col items-left md:gap-[18px] max-md:gap-[6px]">
                                    <Link href='/' className='md:text-[16px] max-md:text-[16px] font-[400] text-[#667479] hover:text-[#80B500]'>Mall Location</Link>

                                    <Link href={'/'} className='md:text-[16px] max-md:text-[16px] font-[400] text-[#667479] hover:text-[#80B500]'>Our Office</Link>

                                    <Link href='/contact-us' className='md:text-[16px] max-md:text-[16px] font-[400] text-[#667479] hover:text-[#80B500]'>Enquiry Form</Link>

                                    <Link href='/contact-us' className='md:text-[16px] max-md:text-[16px] font-[400] text-[#667479] hover:text-[#80B500]'>Contact Us</Link>
                                </div>
                            </div>


                        </div>
                        <div className="col-4 flex flex-col md:gap-[24px] max-md:gap-[10px]">
                            <h2 className='text-[#80B500] font-[600] md:text-[24px] max-md:text-[20px]'>Connect with us</h2>
                            <div className="contact-col flex flex-col items-start md:gap-[24px] max-md:gap-[6px]">
                                <div className='flex gap-2'>
                                    <IoCall className="md:h-[20px] md:w-[20px] max-md:h-[16px] max-md:w-[16px] text-[#80B500] rounded-lg" /> 
                                    <Link href='' className='flex gap-4 items-center justify-center'>
                                        <p className='text-[#80B500] font-[500] md:text-[16px] max-md:text-[14px]'>Call Us:</p>
                                        <p className='text-[#667479] hover:text-[#000] font-[300] md:text-[16px] max-md:text-[14px]'>+971 06 561 5253</p>
                                        <p className='text-[#667479] hover:text-[#000] font-[300] md:text-[16px] max-md:text-[14px]'>+971 06 561 4112</p>
                                    </Link>
                                </div>
                                <div className='flex gap-2 items-center justify-center'>
                                    <RiMailFill className=" md:h-[20px] md:w-[20px] text-[#80B500] rounded-lg" />
                                    <Link href='https://mail.google.com/mail/' className='flex gap-4'>
                                        <p className='text-[#80B500] font-[500] md:text-[16px] max-md:text-[14px]'>Email:</p>
                                        <p className='text-[#667479] hover:text-[#000] font-[300] md:text-[16px] max-md:text-[14px]'>sales@almubarakhypermarket.com</p>
                                    </Link>
                                </div>
                                <div className='flex gap-2 items-center justify-center'>

                                    <FaLocationDot className=" md:h-[20px] md:w-[20px] max-md:h-[16px] max-md:w-[16px] text-[#80B500] rounded-lg " />
                                    <Link href='https://www.google.com/maps/' className='flex gap-4'>
                                        <p className='text-[#80B500] font-[500] md:text-[16px] max-md:text-[14px]'>Address:</p>

                                        <p className='text-[#667479] hover:text-[#000] font-[300] md:text-[16px] max-md:text-[14px]'>Industrial Area 4 Sharjah, UAE</p>
                                    </Link>
                                </div>
                                <div className='flex gap-2 items-center justify-center'>

                                    <IoMdTime className=" md:h-[20px] md:w-[20px] max-md:h-[16px] max-md:w-[16px] text-[#80B500] rounded-lg " />
                                    <Link href='' className='flex gap-4'>
                                        <p className='text-[#80B500] font-[500] md:text-[16px] max-md:text-[14px]'>Work Hours:</p>
                                        <p className='text-[#667479] font-[300] md:text-[16px] max-md:text-[14px]'>8:00 - 20:00, Sunday - Thursday</p>
                                    </Link>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
                <div className='max-w-6xl mx-auto md:h-[2px] max-md:h-[2px] bg-[#000] opacity-[3%] max-md:mt-2'></div>
                <div className="copywrite h-full max-w-6xl mx-auto md:flex items-center justify-between md:mt-[10px] max-md:mt-[10px]">
                    <p className='font-[400] md:text-[16px] max-md:text-[12px] text-[#667479] max-md:text-center'>© 2024 Copyright, All Right Reserved</p>
                    <div className='md:w-[60%] flex justify-between items-center max-md:px-4 max-md:mt-3'>
                    <div className="cards flex gap-[10px] ">
                        <img
                            src="assets/images/visa.png"
                            alt="Visa"
                            className='md:h-12 max-md:h-8'
                        />
                        <img
                            src="assets/images/master.png"
                            alt="Master"
                            className='md:h-12 max-md:h-8'
                        />
                        <img
                            src="assets/images/maestro.png"
                            alt="Maestro"
                            className='md:h-12 max-md:h-8'
                        />
                        <img
                            src="assets/images/american.png"
                            alt="American"
                            className='md:h-12 max-md:h-8'
                        />
                    </div>
                    <div className="media flex gap-[10px]">
                        <div className='bg-[#80B500] md:h-[42px] max-md:h-[24px] md:w-[42px] max-md:w-[24px] p-2 rounded-full flex items-center justify-center'>
                            <FaFacebookF className='md:h-6 max-md:h-4 text-[#FFF]' />
                        </div>
                        <div className='bg-[#80B500] md:h-[42px] max-md:h-[24px] md:w-[42px] max-md:w-[24px] p-2 rounded-full flex items-center justify-center'>
                            <FaLinkedinIn className='md:h-6 max-md:h-4 text-[#FFF]' />
                        </div>
                        <div className='bg-[#80B500] md:h-[42px] max-md:h-[24px] md:w-[42px] max-md:w-[24px] p-2 rounded-full flex items-center justify-center'>
                            <FaInstagram className='md:h-6 max-md:h-4 text-[#FFF]' />
                        </div>
                        <div className='bg-[#80B500] md:h-[42px] max-md:h-[24px] md:w-[42px] max-md:w-[24px] p-2 rounded-full flex items-center justify-center'>
                            <FaTwitter className='md:h-6 max-md:h-4 text-[#FFF]' />
                        </div>


                    </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer