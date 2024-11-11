import React from 'react'
import HeroOther from '../components/hero-other'
import HomeAbout from '../components/home-about'
import HomeBest from '../components/home-best'
import HomeBenefits from '../components/home-benefits'
import Image from 'next/image'

const Page = () => {
  const arr = ["/assets/images/grocery.png","/assets/images/grocery.png","/assets/images/grocery.png"]
  return (
    <>
        
        <HeroOther  name={"About Us"} />
        <HomeAbout />
        <HomeBest />

        <div className='max-w-6xl mx-auto shadow-lg flex flex-col justify-center items-center md:gap-4 py-4 px-4 rounded-[10px] md:mt-10'>
          <p className='text-[#80B500] font-[400] md:text-[40px]'>{`Chairman's Speech`}</p>
          <p className='text-[#838383] font-[400] md:text-[20px]'>Mubarak Group of Hypermarket</p>
          <p className='text-[#667479] text-center md:text-[20px] md:leading-[28.8px] font-[300]'>Over the past few decades, the thrive to build up excellence in the business sector especially in the retail outlets has saw the emergence of Mubarak Group of Companies in UAE. Nurtured from Al-Ain and Abu Dhabhi, the seeds have been slowly and steadily spread to the other emirates of Ajman and Sharjah along with the foresight to build up in Dubai also which will bring a perfect establishment of the group in UAE. The idea was simple, but truly uphill task too when we decided to bring in the best of the quality with out compromising the quantity at the best pricing for the residents of UAE. The group has a dream run during its last few years when it started chains of supermarkets and hypermarkets, started network of restaurants, jewellery and too has visioned up to set more business portfolios under its belt. With the establishment of Al Mubarak Hypermarket at Industrial Area 3, Sharjah we announce our vision to grow fast and wide over the next few years with the new hypermarket in Jaraf Ajman at the doorsteps of getting opened. Concluding we would love to thank each and every one who stood with us for reaching the position on what we are today and will look forward to get your esteemed support in the run for the years to come</p>
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
                className="max-w-6xl mx-auto md:h-[50vh] max-md:h-[30vh] md:py-6 max-md:py-4 flex md:gap-4 max-md:gap-2 mt-4"
                 >
                    {
                        arr.map((ele,i) => (
                            <div key={i} className='md:w-[380px] max-md:w-[300px] h-full relative md:rounded-[8px] max-md:rounded-[10px]'>
                                <Image className='object-cover rounded-[16px]' alt='No Preview' fill src={ele} />
                            </div>

                        ))
                    }
                </div>

        <HomeBenefits />
        
        
    </>
  )
}

export default Page