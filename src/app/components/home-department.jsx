"use client"

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { FaLocationDot } from "react-icons/fa6";
// import { openModal } from "../redux/slice/popupSlice";
// import { useDispatch } from "react-redux";


const HomeDepartment = () => {
    // const dispatch = useDispatch();
    // const handleOpen = () => (
    //     dispatch(openModal())
    // )
    const arr = [
        {
            img: '/assets/images/electronics.jpeg',
            name: 'Electronics & Home Appliance',
        },
        {
            img: '/assets/images/g&fItems.png',
            name: 'Grocery and Food Items',
        },
        {
            img: '/assets/images/fashion.png',
            name: 'Fashion & Lifestyle',
        },
        {
            img: '/assets/images/decor.jpeg',
            name: 'Home Decor & Household',
        },
       
    ]
    return (
        <div className="max-w-6xl mx-auto md:px-4 md:mt-[50px] max-md:mt-[30px] max-md:px-4">
            <div className="md:mt-10 max-md:mt-5 flex flex-col items-start max-md:justify-center max-md:items-center">
                <p className="md:text-[40px] max-md:text-[24px] max-md:text-center font-[400] tracking-tight text-[#80B500]">
                    Our Department
                </p>
            </div>
            <div className="grid md:grid-cols-4 max-md:grid-cols-2 md:gap-4 max-md:gap-6 md:my-4 max-md:my-2">
                {
                    arr.map((ele, i) => (
                        <div key={i} className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
                            <div className="relative md:h-[220px] max-md:h-[28vh] w-full rounded-lg overflow-hidden">
                                <Image
                                    alt='No Preview'
                                    src={ele.img}
                                    fill
                                    className="h-full w-full object-cover top"
                                />

                            </div>
                            <div className="">

                                <p className="md:text-[20px] max-md:text-[18px] text-center font-[500] text-[#00171F] my-2">
                                {ele.name}
                                </p>
                                {/* <div className="text-gray-500 md:text-[16px] max-md:text-[16px] md:mb-1 max-md:mb-2">{ele.det}</div> */}
                                {/* <div className="flex items-start mb-4">
                                    <p className="mt-2 md:text-[16px] max-md:text-[18px] font-semibold leading-5 text-[#00171F] text-left">Rs.
                                        <span className="md:text-[16px] max-md:text-[18px] font-semibold">{ele.price} </span>
                                    </p>
                                </div> */}
                               
                            </div>
                        </div>

                    ))
                }
            </div>
            {/* <div className="flex justify-center">
                <Link
                    href={'/service'}
                    className="inline-block font-medium max-md:text-[16px] bg-[#1A3D97] border-2 hover:bg-[#FFF] hover:text-[#1A3D97] text-[#FFF] w-fit md:mt-6 max-md:mt-2 border-[#1A3D97] md:py-[14px] max-md:py-[10px] md:px-[36px] max-md:px-[22px] rounded-full"
                >
                    View All
                </Link>
            </div> */}
        </div>
    );
};

export default HomeDepartment;
