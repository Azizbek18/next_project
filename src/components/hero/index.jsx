import React from 'react'

function Hero() {
  return (
    <div className='bg-[#DCEAF5]  '>
        <div className="container max-w-[1280px] gap-12 box-border flex mx-auto">
           <div className="w-[40%] py-[60px] ">
                <h1 className='font-poppins font-[600] text-[64px] leading-[72px] tracking-[-3%] '>
                Prosper with our <br /> bespoke solutions
                </h1>
                <p className='font-poppins font-[500] mt-[12px] text-[18px] leading-[30px] tracking-[0%] text-[#5B5B5B] '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Suspendisse varius enim in eros elementum tristique
                </p>
                <div className="flex gap-4 mt-[25px] mb-[40px] ">
                    <button className='bg-[#F58A07] w-[150px] h-[48px] rounded-[30px] text-white hover:bg-[#DCEAF5] hover:text-[#1D3444] text-[16px] font-[600] hover:border-2 border-[#F58A07] '>See All Services </button>
                    <button className='bg-[#F58A07] w-[150px] h-[48px] rounded-[30px] text-white hover:bg-[#DCEAF5] hover:text-[#1D3444] text-[16px] font-[600] hover:border-2 border-[#F58A07] '>See our services</button>
                </div>
                <p className='font-poppins font-[400] text-[18px] text-[#39414980] leading-[30px] tracking-[0%] '>
                Worked with 100+ Companies
                </p>
                <div className="flex py-[20px] gap-10">
                    <img src="/images/hero_logo.svg" alt="hero logo" />
                    <img src="/images/hero_logo2.svg" alt="hero logo 2" />
                    <img src="/images/hero_logo3.svg" alt="hero logo 3" />
                </div>
           </div>
           <div className="w-[60%]  relative m-0 p-0 box-border">
            <div className='absolute bottom-0 left-[105px] bg-[#F58A07] mix-blend-multiply rounded-t-[20px] opacity-[75%] w-[170px] h-[370px] z-10' ></div>
            <div className='absolute bottom-0 left-[500px] bg-[#F58A07] mix-blend-multiply rounded-t-[20px] opacity-[75%] w-[150px] h-[220px] z-0 ' ></div>
            <img src="/images/image.png"  className='w-full h-full object-cover relative z-[5]  block' alt="wrapper image" />
           </div>
        </div>
    </div>
  )
}

export default Hero