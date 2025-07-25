import Image from 'next/image'
import React from 'react'

function CTASectionPage() {
  return (
    <div className='flex flex-col lg:flex-row my-[20px] '> 
        <div className="w-full lg:w-[50%] h-[300px] lg:h-[400px] relative ">
            <Image fill src='/images/cofe.png' alt='cofe' />
        </div>
        <div className=" w-full lg:w-[50%] h-[350px] flex flex-col justify-center lg:h-[400px] bg-[#F58A07] ">
            <div className="px-[10px] lg:px-[130px] py-[20px] lg:py-[80px] ">
                <h3 className='font-poppins font-[600] text-[40px] lg:text-[48px] text-white leading-[56px] tracking-[-3%]  '>
                Energy of a start-up combined with 30 years of experience.
                </h3>
                <button className='bg-[#FFFFFF] mt-[40px] rounded-[30px] px-[20px] py-[10px] border-2 border-[#F58A07] hover:bg-[#F58A07] hover:text-white hover:border-2 hover:border-white text-[#F58A07] font-poppins font-[600] text-[16px] leading-[107%] tracking-[0px] '>
                See Job Vacancies
                </button>
            </div>
        </div>
    </div>
  )
}

export default CTASectionPage