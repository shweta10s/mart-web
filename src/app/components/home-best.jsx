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
            det: 'Our pricing has been our highlight through out our success journey over the few years since we believe that we are here to buy and give the products to each and every one with the common man more on the focus.'
        },
        {
            // img: '/assets/images/Capa_1.png',
            name: 'Best Products',
            det: 'Always the best price keeps smiles but also challenges too, the first one for providing and second one for how to provide it with out compromising the quality and quantity. We are keen to keep it in balance with the price and the product and over the years our customers too know it that we give them the best at the best.'
        },
        {
            // img: '/assets/images/bird.jpeg',
            name: 'Best Services',
            det: 'The key to success of any business always depends on how good the services are and we will make you feel that every moment you spend at our outlets will bring to you the best of the experience for which we owe a lot to our dedicated staff too who ensure that every one and every thing is addressed.'
        },
        {
            // img: '/assets/images/insect.jpeg',
            name: 'Best options',
            det: 'The day to day requirements now has a bigger demand since customers are turning choosy with the huge outlook for more options which should be reliable, competitive as well as fit in to the tailor made budget propositions. We have it those options with us which always brings gallons of smile for the customers.'
        },

    ]
    return (
        <div>
            <div className="max-w-6xl mx-auto md:pt-12 pb-2 grid lg:grid-cols-4 max-md:grid-cols-2 md:gap-4 max-md:gap-6 md:my-4 max-md:my-2">
                {
                    arr.map((ele, i) => (
                        <div key={i} className="bg-white relative rounded-lg shadow-lg p-4 max-w-sm text-center">
                           
                            <div className="">
                            <div className='absolute h-[50px] w-[50px] -top-5 left-[40%] rounded-full p-2 bg-[#FF7D09] flex justify-center items-center'>
                            {/* <Image
                                    alt='No Preview'
                                    src={ele.img}
                                    fill
                                    className="object-cover"
                                /> */}
                            </div>
                                <p className="md:text-[20px] text-center max-md:text-[20px] md:mt-6 font-[500] text-[#00171F] my-2">
                                    {ele.name}
                                </p>
                                <div className="text-gray-500 md:text-[12px] max-md:text-[16px] md:mb-1 max-md:mb-2">{ele.det}</div>

                            </div>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}

export default HomeBest