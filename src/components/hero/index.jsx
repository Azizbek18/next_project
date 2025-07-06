import React from 'react'

function Hero() {
return (
<div className='bg-[#DCEAF5] py-8 '>
  <div className="container max-w-[1280px] mx-auto px-4 box-border flex flex-col lg:flex-row gap-12">
    <div className="w-full lg:w-[43%] flex flex-col justify-center h-[600px]  order-2 lg:order-1 ">
      <h1 className='font-poppins text-center md:text-center sm:text-center lg:text-start text-[#1D3444] font-[600] text-[32px] sm:text-[48px] md:text-[54px] lg:text-[64px] leading-[40px] sm:leading-[60px] lg:leading-[72px] tracking-[-3%] '>
        Prosper with our  bespoke solutions
      </h1>
      <p className='font-poppins text-center lg:text-start font-[500] mt-[12px] text-[18px] leading-[30px] tracking-[0%] text-[#5B5B5B] '>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Suspendisse varius enim in eros elementum
        tristique
      </p>
      <div className="flex justify-center lg:justify-start gap-4 mt-[25px] mb-[40px] ">
        <button
          className='bg-[#F58A07] w-[180px] lg:w-[150px] h-[48px] rounded-[30px] text-white hover:bg-[#DCEAF5] hover:text-[#1D3444] text-[16px] font-[600] hover:border-2 border-[#F58A07] '>See
          All Services </button>
        <button
          className='bg-[#F58A07] w-[180px] lg:w-[150px] h-[48px] rounded-[30px] text-white hover:bg-[#DCEAF5] hover:text-[#1D3444] text-[16px] font-[600] hover:border-2 border-[#F58A07] '>See
          our services</button>
      </div>
      <p className='font-poppins text-center lg:text-start font-[400] text-[18px] text-[#39414980] leading-[30px] tracking-[0%] '>
        Worked with 100+ Companies
      </p>
      <div className="flex py-[20px] justify-center lg:justify-start flex-wrap gap-10">
        <img src="/images/hero_logo.svg" alt="hero logo" />
        <img src="/images/hero_logo2.svg" alt="hero logo 2" />
        <img src="/images/hero_logo3.svg" alt="hero logo 3" />
      </div>
    </div>
    <div className="w-full lg:w-[55%] h-[350px] lg:h-[600px] relative m-0 p-0 box-border order-1 lg:order-2">
      <div
        className='absolute bottom-0 left-[30px] sm:left-[60px] md:left-[65px] lg:left-[70px] bg-[#F58A07] mix-blend-multiply rounded-t-[20px] opacity-[75%] h-[200px] sm:h-[200px] lg:h-[330px] w-[120px] sm:w-[120px] lg:w-[170px] z-10'>
      </div>
      <div
        className='absolute bottom-0 left-[250px] sm:left-[330px] lg:left-[440px] bg-[#F58A07] mix-blend-multiply rounded-t-[20px] opacity-[75%] h-[120px] sm:h-[120px] lg:h-[220px] w-[100px] sm:w-[100px] lg:w-[170px] z-0'>
      </div>
      <img src="/images/image.png" className='w-full h-full object-cover relative z-[5]  block' alt="wrapper image" />
    </div>
  </div>
</div>
)
}

export default Hero