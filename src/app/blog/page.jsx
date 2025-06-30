import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

function BlogPage() {
return (
<div className=' bg-[#DCEAF5] '>
  <div className="container py-[60px] mx-auto max-w-[1280px] ">
    <div className="flex relative justify-between gap-4 items-center py-[60px] ">
      <div className="w-[45%] ">
        <div className="flex items-center gap-4 ">
          <div className="w-[30px] h-[30px] rounded-[50%] overflow-hidden ">
            <img className='w-full h-full object-cover object-center' src="/images/boy.png" alt="Boy photo" />
          </div>
          <p className='font-poppins font-[400] text-[16px] leading-[32px] tracking-[0px] '>
            Andrew Jonson
          </p>
          <p className='font-poppins font-[400] text-[16px] leading-[32px] tracking-[0px] '>
            Posted on 27th January 2021
          </p>
        </div>
        <h2 className='font-poppins py-[10px] font-[700] text-[60px] leading-[72px] tracking-[-3%] '>
        Our internal process and longerm vision
        </h2>
        <p className='font-poppins py-[10px] mb-[15px] font-[500] text-[18px] leading-[30px] tracking-[0%]'>
        It is a long established fact that a reader will be distracted by <br /> the readable content of a page when looking at its layout. The <br /> Maker is a decentralized. We aim to attain the
        </p>
        <button className='flex gap-2 items-center '>
          <p className='font-[500] text-[16px] leading-[107%] tracking-[0%] text-[#F58A07] '>
          Read More
          </p>
          <FaArrowRightLong className='text-[#F58A07]' />
        </button>
      </div>
      <div className=" w-[55%] h-[550px] rounded-[20px] overflow-hidden ">
        <img className='w-[100%] h-[100%] object-cover object-center ' src="/images/tennis.png"
          alt="About section photo" />
      </div>
    </div>
  </div>
</div>
)
}

export default BlogPage