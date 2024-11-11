import React from 'react'

const HomeContact = () => {
    return (
        <div className='w-full bg-[#FA6D000D]'>
            <div className='max-w-6xl mx-auto '>
            <div className=' md:px-6 max-md:px-3 max-md:py-2 rounded-[4px] md:h-[50vh] max-md:h-[90%] md:w-full max-md:w-[90%] max-md:mx-auto flex flex-col '>
            <p className="font-[600] md:text-[40px] max-md:text-[18px] md:mt-2 text-[#000]">Contact With Us</p>
            <form 
            // onSubmit={handleSubmit} 
            className='md:mt-4 max-md:mt-2 flex flex-col gap-4'>
              <div className='grid md:grid-cols-2 md:gap-4 max-md:gap-3'>
                <input
                  className='bg-[#FFF] shadow-xl rounded-[4px] md:px-[16px] max-md:px-[8px] md:py-[10px] max-md:py-[6px] font-[400] md:text-[16px] max-md:text-[14px] text-[#667479] outline-none'
                  type="text"
                  name='name'
                  placeholder='Name'
                //   value={formData.name}
                //   onChange={handleChange}
                  required
                />
                <input
                  className='bg-[#FFF] shadow-xl rounded-[4px] md:px-[16px] max-md:px-[8px] md:py-[10px] max-md:py-[6px] font-[400] md:text-[16px] max-md:text-[14px] text-[#667479] outline-none'
                  type="tel"
                  name='phone'
                  placeholder='Phone Number'
                //   value={formData.phone}
                //   onChange={handleChange}
                  required
                />
              </div>
                            <input
                className='bg-[#FFF] shadow-xl rounded-[4px] md:px-[16px] max-md:px-[8px] md:py-[10px] max-md:py-[8px] font-[400] md:text-[16px] max-md:text-[14px] text-[#667479] outline-none'
                type='email'
                name='email'
                placeholder='Email Id'
                // value={formData.services}
                // onChange={handleChange}
                required
              />
                 <input
                className='bg-[#FFF] shadow-xl rounded-[4px] md:px-[16px] max-md:px-[8px] md:py-[10px] max-md:py-[8px] font-[400] md:text-[16px] max-md:text-[14px] text-[#667479] outline-none'
                type='text'
                name='location'
                placeholder='Location'
                // value={formData.services}
                // onChange={handleChange}
                required
              />
              
              <div className='w-fit '>
                <button className="md:py-[14px] max-md:py-[10px] md:px-[28px] max-md:px-[14px] md:mt-2 max-md:mt-[10px] max-md:text-[16px] border border-[#FF7D09] bg-[#FF7D09] hover:bg-[#FFF] hover:text-[#FF7D09] text-[#FFF] md:rounded-[16px] max-md:rounded-[20px]">
                  Submit 
                  {/* {isLoading && <RiLoader5Fill className='animate-spin' />} */}
                </button>
              </div>
            </form>
          </div>
            </div>
        </div>
    )
}

export default HomeContact