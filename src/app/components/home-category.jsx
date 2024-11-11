"use client"

import React from 'react'
import Image from 'next/image'
import { FaCircleChevronRight } from "react-icons/fa6";
import { FaCircleChevronLeft } from "react-icons/fa6";
import Link from 'next/link';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Navigation, Pagination } from 'swiper/modules';


const HomeCategory = () => {
    const arr = [
        {
            img:'/assets/images/household.png',
            items:'Household Items',
            count:'20 items'
        },
        {
            img:'/assets/images/jewelry.png',
            items:'Jewelry',
            count:'220 items'
        },
        {
            img:'/assets/images/fruit.png',
            items:'Fruit Items',
            count:'10 items'
        },
        {
            img:'/assets/images/watch.png',
            items:'Watches',
            count:'40 items'
        },
        {
            img:'/assets/images/groceryItem.png',
            items:'Grocery Items',
            count:'233 items'
        },
        {
            img:'/assets/images/gift.png',
            items:'Gift Items',
            count:'3 items'
        },
        {
            img:'/assets/images/stationery.png',
            items:'Stationery Items',
            count:'9 items'
        }

    ]


    return (
        <div className="relative max-w-7xl mx-auto md:mt-[50px] max-md:mt-[30px] max-md:px-4">
            <div className="max-w-6xl mx-auto md:px-4">
                <div className="md:mt-10 max-md:mt-5 flex flex-col items-start  max-md:justify-center max-md:items-center">
                    
                    <p className="md:text-[40px] max-md:text-[24px] max-md:text-center font-[400] tracking-tight text-[#80B500]">
                        Explore Categories
                    </p>
                </div>
                <div
                // autoplay
                // loop
                // slidesPerView={1}
                // spaceBetween={10}
                // pagination={{
                //   clickable: true,
                // }}
                // breakpoints={{
                //   640: {
                //     slidesPerView: 2,
                //     spaceBetween: 20,
                //   },
                //   768: {
                //     slidesPerView: 3,
                //     spaceBetween: 40,
                //   },
                //   1024: {
                //     slidesPerView: 4,
                //     spaceBetween: 50,
                //   },
                // }}
                // modules={[Pagination , Navigation]}
                // navigation={{
                //     prevEl: `.HomeSlidePrev`,
                //     nextEl: `.HomeSlideNext`,
                // }}
                className="mySwiper w-full md:h-[40vh] max-md:h-[30vh] md:py-6 max-md:py-4 flex md:gap-4 max-md:gap-2 mt-4"
                 >
                    {
                        arr.map((ele,i) => (
                            <div key={i} className='md:w-[150px] md:h-[180px] max-md:w-[200px] h-full md:rounded-[16px] max-md:rounded-[10px] bg-[#FEEFEA] flex flex-col items-center justify-center'>

                                <img className='md:w-[80px] md:h-[80px] object-cover rounded-[16px]' alt='No Preview' fill src={ele.img} />
                                <p className='text-[#253D4E] font-[600] md:text-[18px] md:mt-4 text-center'>{ele.items}</p>
                                <p className='text-[#ADADAD] font-[500] md:text-[14px] text-center'>{ele.count}</p>
                            </div>

                        ))
                    }
                </div>
                <div className='w-full h-[50px] absolute left-0 top-[45%] md:px-8 max-md:px-4 flex justify-between items-center z-20'>
                    <FaCircleChevronLeft className='text-[#1a3d9733] text-[30px] md:ml-4 HomeSlidePrev cursor-pointer max-md:text-blue-600' />
                    <FaCircleChevronRight className='text-[#1a3d9733] text-[30px] md:mr-4 HomeSlideNext cursor-pointer max-md:text-blue-600' />
                </div>
            </div>
            <div className="flex justify-center ">
                <Link
                    href={'/categories'}
                    className="inline-block font-medium max-md:text-[16px] bg-transparent border hover:bg-[#FF7D09] hover:text-[#FFF] text-[#FF7D09] w-fit  max-md:mt-2 border-[#FF7D09] md:py-[14px] max-md:py-[10px] md:px-[36px] max-md:px-[22px] rounded-[16px]"
                >
                    Explore More
                </Link>
            </div>
        </div>
    )
}

export default HomeCategory