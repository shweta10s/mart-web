import Image from 'next/image'
import React from 'react'

const HomeBest = () => {
    // const dispatch = useDispatch();
    // const handleOpen = () => (
    //     dispatch(openModal())
    // )
    const arr = [
        {
            // img: '/assets/images/Capa_1.png',
            name: 'Best Price',
            det: 'Our success lies in fair pricing, focusing on accessibility for all, especially the common man. This commitment has highlighted our journey, ensuring everyone can access quality products affordably.'
        },
        {
            // img: '/assets/images/Capa_1.png',
            name: 'Best Products',
            det: 'Offering the best prices brings both joy and challenges: maintaining quality and quantity. We balance cost and product, and over the years, customers trust us to deliver the best value.'
        },
        {
            // img: '/assets/images/bird.jpeg',
            name: 'Best Services',
            det: 'The success of any business relies on exceptional service, and our dedicated staff ensures every moment at our outlets delivers a top-notch experience, meeting every need with care and attention.'
        },
        {
            // img: '/assets/images/insect.jpeg',
            name: 'Best options',
            det: 'With rising demand and choosier customers, we offer reliable, competitive options tailored to fit any budget—bringing satisfaction and smiles to all who choose us for their daily needs.'
        },

    ]
    return (
        <div>
            <div className="max-w-6xl mx-auto md:pt-12 pb-2 grid md:grid-cols-4 max-md:grid-cols-2 md:gap-4 max-md:gap-4 md:my-4 max-md:my-6">
                {
                    arr.map((ele, i) => (
                        <div key={i} className="bg-white relative rounded-lg shadow-lg p-4 max-w-sm text-center">
                           
                            <div className="">
                            <div className='absolute md:h-[50px] max-md:h-[20px] md:w-[50px] max-md:w-[20px] md:-top-5 max-md:-top-2 md:left-[40%] max-md:left-[46%] rounded-full p-2 bg-[#FF7D09] flex justify-center items-center'>
                            {/* <Image
                                    alt='No Preview'
                                    src={ele.img}
                                    fill
                                    className="object-cover"
                                /> */}
                            </div>
                                <p className="md:text-[20px] text-center max-md:text-[16px] md:mt-6 font-[500] text-[#00171F] my-2">
                                    {ele.name}
                                </p>
                                <div className="text-gray-500 md:text-[12px] max-md:text-[12px] md:mb-1 max-md:mb-2">{ele.det}</div>

                            </div>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}

export default HomeBest