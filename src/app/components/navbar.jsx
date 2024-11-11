"use client"

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
// import PhoneNavbarDrawer from './phoneNavbarDrawer';
// import { useDispatch } from 'react-redux';
// import { openModal } from '../redux/slice/popupSlice';

const Navbar = () => {
  const path = usePathname();
//   const dispatch = useDispatch();
//   const handleModalOpen = () => (
//     dispatch(openModal())
//   )
  const arr = [
    {
      name:'Home',
      link:'/'
    },
    {
      name:'Categories',
      link:'/categories'
    },
    {
      name:'About Us',
      link:'/about-us'
    },
    {
      name:'Contact Us',
      link:'/contact-us'
    },
  ]
  return (
    <nav className="bg-white z-20 w-full">
  <div className="max-w-7xl md:px-2 mx-auto flex items-center justify-between md:py-6 max-md:py-2 max-md:px-4">
    <Link
      href="/">
      <img
        src="/assets/images/logo.png"
        className="md:h-10 max-md:h-4 md:ml-12 max-md:pl-4"
        alt="Logo"
      />
    
    </Link>
    <div
      data-collapse-toggle="navbar-default"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-[24px] text-[#1A3D97] rounded-lg md:hidden "
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      {/* <PhoneNavbarDrawer /> */}
    </div>
    <div className="w-full max-md:hidden md:block md:w-auto" id="navbar-default">
      <ul className="font-[400] md:text-[18px] flex gap-10 p-4 md:p-0 mt-4 md:flex-row md:mt-0 text-[#000000] ">
      {
        arr.map((ele,i) => (
        <li key={i}>
          <Link
            href={ele.link}
            className={`hover:text-[#FF7D09] ${ele.link === path && "text-[#FF7D09]"}`}
          >
            {ele.name}
          </Link>
        </li>

        ))
      }
      </ul>
    </div>
      <div className='max-md:hidden'>
      {/* <button
        // onClick={handleModalOpen}
        className="py-[12px] px-[28px] bg-[#FF7D09] border border-[#FF7D09] hover:bg-[#FFF] hover:text-[#FF7D09] text-[#FFF] rounded-[16px]"
        type="button"
      >
         Contact Us
      </button> */}

      </div>
  </div>
</nav>

  )
}

export default Navbar   