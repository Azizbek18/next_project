import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

function ServiceSection() {
return (
<div>
    <div className="container relative mb-15 mx-auto rounded-[20px] py-[30px]  px-[80px] bg-[#EDF7FF] max-w-[1280px]">
        <img className='absolute right-[-15px] top-[-15px] ' src="/images/Ribbon.svg" alt="Ribbon photo" />
        <img className='absolute right-[10px] top-[10px] ' src="/images/Stars.svg" alt="Ribbon photo" />
        <div className=" flex gap-5">
            <button
                className='border-2 border-[#A8BCCC] px-[20px] py-[10px] hover:bg-white hover:text-[#F58A07] hover:border-2 hover:border-[#EDF7FF] font-[600] text-[16px] leading-[100%] tracking-[0px] rounded-[20px] '>Business
                strategy</button>
            <button
                className='border-2 border-[#A8BCCC] px-[20px] py-[10px] hover:bg-white hover:text-[#F58A07] hover:border-2 hover:border-[#EDF7FF] font-[600] text-[16px] leading-[100%] tracking-[0px] rounded-[20px] '>Business
                strategy</button>
            <button
                className='border-2 border-[#A8BCCC] px-[20px] py-[10px] hover:bg-white hover:text-[#F58A07] hover:border-2 hover:border-[#EDF7FF] font-[600] text-[16px] leading-[100%] tracking-[0px] rounded-[20px] '>Business
                strategy</button>
        </div>
        <div className=" py-[50px] flex items-center justify-between">
            <div className="w-[42%] ">
                <h3 className='font-poppins font-[600] text-[48px] leading-[56px] tracking-[-3%] '>
                    Helping clients with research and strategy for their business
                </h3>
                <p className='font-poppins py-[10px] font-[500] text-[18px] leading-[30px] tracking-[0%] '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit
                    elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
                </p>
                <p  className='font-poppins py-[10px] font-[500] text-[18px] leading-[30px] tracking-[0%]'>
                    Mattis purus. Vivamus commodo suscipit tellus et pellent. Curabitur sit amet eros blan esque.
                </p>
                <button className='flex gap-2 py-[15px] items-center '>
                    <p className='font-[500] text-[16px] leading-[107%] tracking-[0%] text-[#F58A07] '>
                        Learn More
                    </p>
                    <FaArrowRightLong className='text-[#F58A07]' />
                </button>
            </div>
            <div className=" w-[35%] h-[400px] rounded-[20px] overflow-hidden ">
                <div className="absolute w-[100px] mix-blend-multiply bg-[#F58A07] rounded-l-[20px] h-[400px] "></div>
                <img className='w-[100%] h-[100%] object-cover object-center ' src="/images/jamoa.png" alt="About section photo" />
            </div>
        </div>
    </div>
</div>
)
}

export default ServiceSection