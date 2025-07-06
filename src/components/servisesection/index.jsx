import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

function ServiceSection() {
return (
<div>
    <div className="container relative px-[20px] lg:px-[40px] mb-15 mx-auto rounded-[20px] py-[30px]   bg-[#EDF7FF] max-w-[1280px]">
        <img className='absolute w-[80px] lg:w-[150px]  right-[0px] lg:right-[-10px] top-[0px] lg:top-[-10px] ' src="/images/Ribbon.svg" alt="Ribbon photo" />
        <img className='absolute right-[3px] top-[3px] w-[60px] lg:w-[90px] ' src="/images/Stars.svg" alt="Ribbon photo" />
        <div className=" grid grid-cols-2 lg:grid-cols-6  gap-2 px-[20px] lg:px-0 lg:gap-5">
            <button
                className='border-2 border-[#A8BCCC] px-[10px] py-[10px] hover:bg-white hover:text-[#F58A07] hover:border-2 hover:border-[#EDF7FF] font-[600] text-[12px] lg:text-[16px] leading-[100%] tracking-[0px] rounded-[20px] '>Business
                strategy</button>
            <button
                className='border-2 border-[#A8BCCC] px-[10px] py-[10px] hover:bg-white hover:text-[#F58A07] hover:border-2 hover:border-[#EDF7FF] font-[600] text-[12px] lg:text-[16px] leading-[100%] tracking-[0px] rounded-[20px] '>Digitalization</button>
            <button
                className='border-2 border-[#A8BCCC] px-[20px] py-[10px] hover:bg-white hover:text-[#F58A07] hover:border-2 hover:border-[#EDF7FF] font-[600] text-[12px] lg:text-[16px] leading-[100%] tracking-[0px] rounded-[20px] '>Risk assessment</button>
        </div>
        <div className=" py-[50px] flex flex-col gap-8 lg:gap-0 lg:flex-row items-center justify-between">
            <div className="w-full lg:w-[42%] flex flex-col items-center lg:text-start ">
                <h3 className='font-poppins  text-center lg:text-start font-[600] text-[30px] lg:text-[48px] leading-[56px] tracking-[-3%] '>
                    Helping clients with research and strategy for their business
                </h3>
                <p className='font-poppins text-center lg:text-start text-[#5B5B5B] py-[10px] font-[500] text-[18px] leading-[30px] tracking-[0%] '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit
                    elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
                </p>
                <p  className='font-poppins text-center lg:text-start text-[#5B5B5B] py-[10px] font-[500] text-[18px] leading-[30px] tracking-[0%]'>
                    Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque.
                </p>
                <button className='flex gap-3 py-[15px] items-center '>
                    <span className='font-[500] text-[16px] leading-[0%] tracking-[0%] text-[#F58A07] '>
                    See all services
                    </span>
                    <FaArrowRightLong className='text-[#F58A07] mt-1 ' />
                </button>
            </div>
            <div className=" w-full  lg:w-[35%] h-[320px]  lg:h-[400px] rounded-[20px] overflow-hidden ">
                <div className="absolute w-[70px] lg:w-[100px] mix-blend-multiply bg-[#F58A07] rounded-l-[20px] h-[320px] lg:h-[400px] "></div>
                <img className='w-[100%] h-[100%] object-cover object-center  ' src="/images/jamoa.png" alt="About section photo" />
            </div>
        </div>
    </div>
</div>
)
}

export default ServiceSection