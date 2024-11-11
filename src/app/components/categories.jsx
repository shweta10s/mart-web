"use client"

import Image from 'next/image';
// import Link from 'next/link';
import React, { useState } from 'react'
import HomeBenefits from './home-benefits';
// import { useDispatch } from 'react-redux';
// import { openModal } from '../redux/slice/popupSlice';

const Categories = () => {
    const [isStat, settIsStat] = useState(6);
    const handleMore = () => {
        settIsStat(isStat + 3)
    }
    // const dispatch = useDispatch();
    // const handleOpen = () => (
    //     dispatch(openModal())
    // )
    const pack = [

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
        <div className="max-w-6xl mx-auto md:px-4 md:mt-[50px] max-md:mt-[30px] max-md:px-4">
            <div className="md:mt-10 max-md:mt-5 flex flex-col items-start">
            <p className="md:text-[40px] max-md:text-[24px] max-md:text-center font-[400] tracking-tight text-[#80B500]">
                        Explore Categories
                    </p>
            </div>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 md:gap-x-4 md:gap-y-8 max-md:gap-y-4 md:my-4 max-md:my-2'>
                {
                    pack.slice(0, isStat).map((ele, i) => (
                        <div key={i} className="bg-[#FEEFEA] flex flex-col justify-center items-center rounded-lg shadow-lg pb-4 max-w-sm">
                            <div className=" md:h-full flex justify-center items-center py-2 max-md:h-[26vh] w-full rounded-lg overflow-hidden">
                            <img
                            className='md:w-[180px] md:h-[180px] object-cover rounded-[16px]' alt='No Preview' fill src={ele.img} />

                            </div>
                            <div className="">

                            <p className='text-[#253D4E] font-[600] md:text-[18px] md:mt-4 text-center'>{ele.items}</p>
                            <p className='text-[#ADADAD] font-[500] md:text-[14px] text-center'>{ele.count}</p>
                                
                                <div className="grid">

                                    {/* <button 
                                    onClick={handleOpen} 
                                    className="border-[#1A3D97]  md:py-[14px] max-md:py-[10px] md:px-[28px] max-md:px-[14px] w-full bg-transparent text-[#1A3D97] bg-[#FFF] border hover:bg-[#1A3D97] hover:text-[#FFF] rounded-full">
                                        Schedule Service
                                    </button> */}

                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
            <div className='flex justify-center items-center md:mt-2'>
                {
                    (pack.length >= isStat) ?
                        <button 
                        onClick={handleMore} 
                        className="inline-block font-medium max-md:text-[16px] bg-transparent border hover:bg-[#FF7D09] hover:text-[#FFF] text-[#FF7D09] w-fit  max-md:mt-2 border-[#FF7D09] md:py-[14px] max-md:py-[10px] md:px-[36px] max-md:px-[22px] rounded-[16px]">View More</button>
                        :
                        <button 
                        onClick={() => settIsStat(3)} 
                        className="inline-block font-medium max-md:text-[16px] bg-transparent border hover:bg-[#FF7D09] hover:text-[#FFF] text-[#FF7D09] w-fit  max-md:mt-2 border-[#FF7D09] md:py-[14px] max-md:py-[10px] md:px-[36px] max-md:px-[22px] rounded-[16px]">View Less</button>

                }
            </div>
           <HomeBenefits />
        </div>
    );
};

export default Categories;
