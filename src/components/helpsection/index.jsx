import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function HelpSection() {
    const infor = [
        {
            img:'/images/help.png',
            title:'Business strategy',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ',
        },
        {
            img:'/images/help2.png',
            title:'Digitalization',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ',
        },
        {
            img:'/images/help3.png',
            title:'Risk assessment',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, ',
        }
    ]
  return (
    <div>
        <div className="container px-[20px] max-w-[1280px] mx-auto py-[80px] ">
            <h2 className='font-poppins lg:pr-[500px] text-center lg:text-start font-[600] text-[40px] sm:text-[44px] md:text-[46px] lg:text-[48px] text-[#1D3444] leading-[56px] tracking-[-3%] '>
            We help more than 1500 companies from all sectors
            </h2>
            <p className='font-poppins text-center lg:text-start lg:pr-[560px]  py-5 font-[500] text-[18px] leading-[30px] tracking-[0%] text-[#5B5B5B] '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros  blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et  pellentesque.
            </p>
            <ul className='grid grid-cols-1 lg:grid-cols-3  gap-10 mt-8'>
            {
                infor.map((item,index)=>(
                    <li className='flex flex-col lg:items-start ' key={index}>
                        <div className="w-full lg:w-[400px] h-[240px] sm:h-[350px] lg:h-[280px] rounded-[20px] overflow-hidden ">
                            <img className='w-full h-full overflow-hidden object-cover ' src={item.img} alt="Help section photo" />
                        </div>
                        <h3 className='mt-7 font-poppins text-center lg:text-start font-[500] text-[24px] leading-[103%] tracking-[-3%] '>
                            {item.title}
                        </h3>
                        <p className='w-full lg:w-[400px] py-4 text-center lg:text-start font-[500] text-[18px] leading-[28px] tracking-[0%] text-[#5B5B5B] '>
                            {item.text}
                        </p>
                        <button className='flex  gap-2 items-center '>
                            <p className='font-[500] text-[16px] leading-[107%] tracking-[0%] text-[#F58A07] '>
                            Learn More
                            </p>
                            <FaArrowRightLong className='text-[#F58A07]' />
                        </button>
                    </li>
                ))
            }
            </ul>
        </div>
    </div>
  )
}

export default HelpSection