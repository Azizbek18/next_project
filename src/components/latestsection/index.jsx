import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

function LatestSection() {
const infor = [
{
img:'/images/help.png',
title:'Business strategy',
text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et. ',
},
{
img:'/images/help2.png',
title:'Digitalization',
text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et. ',
},
{
img:'/images/help3.png',
title:'Risk assessment',
text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et. ',
}
]
return (
<div className='bg-[#DCEAF5] '>
    <div className="container px-[20px] mx-auto py-[80px] max-w-[1280px] ">
        <h3 className='font-poppins font-[600] text-[48px] leading-[56px] tracking-[-3%] '>
            Latest Blog & News
        </h3>
        <ul className='grid grid-cols-1 gap-10 lg:grid-cols-3 mt-8  justify-between'>
            {
            infor.map((item,index)=>(
            <li className='bg-white  rounded-[20px] ' key={index}>
                <div className="w-full lg:w-[400px] h-[220px] rounded-t-[20px] overflow-hidden ">
                    <img className='w-full h-full overflow-hidden object-cover ' src={item.img}
                        alt="Help section photo" />
                </div>
                <div className="px-[20px] py-[20px] ">
                    <h3 className='mt-7  font-poppins font-[500] text-[24px] leading-[103%] tracking-[-3%] '>
                        {item.title}
                    </h3>
                    <p className=' w-full py-4 font-[500] text-[18px] leading-[28px] tracking-[0%] text-[#5B5B5B] '>
                        {item.text}
                    </p>
                    <button className='flex gap-2 items-center '>
                        <p className='font-[500] text-[16px] leading-[107%] tracking-[0%] text-[#F58A07] '>
                            Learn More
                        </p>
                        <FaArrowRightLong className='text-[#F58A07]' />
                    </button>
                </div>
            </li>
            ))
            }
        </ul>
    </div>
</div>
)
}

export default LatestSection