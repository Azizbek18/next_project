import React from 'react'

function ServicesPage() {
return (
<div>
  <div className="container max-w-[1280px] mx-auto ">
    <div className="flex relative justify-between items-center py-[60px] ">
      <img className='absolute top-[150px] right-[-50px] ' src="/images/circle.svg" alt="circle" />
      <div className="w-[45%] ">
        <h2 className='font-poppins py-[10px] font-[700] text-[60px] leading-[72px] tracking-[-3%] '>
        We serve clients with ground breaking solutions
        </h2>
        <p className='font-poppins py-[10px] mb-[15px] font-[500] text-[18px] leading-[30px] tracking-[0%]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Aliquam leo odio, sagittis quis ornare quis.
        </p>
        <button
          className='bg-[#F58A07] mt-[5px] text-white hover:bg-white border-2 border-white hover:border-[#F58A07] hover:border-2 hover:text-[#F58A07] rounded-[25px]  px-[25px] py-[15px] font-poppins font-[600] text-[16px] leading-[107%] tracking-[0px] cursor-pointer '>
          Work With Us
        </button>
      </div>
      <div className=" w-[45%] h-[550px] rounded-[20px] overflow-hidden ">
        <div className="absolute w-[150px] mix-blend-multiply bg-[#F58A07] rounded-l-[20px] h-[550px] "></div>
        <img className='w-[100%] h-[100%] object-cover object-center ' src="/images/ofis.png"
          alt="About section photo" />
      </div>
    </div>
  </div>
</div>
)
}

export default ServicesPage