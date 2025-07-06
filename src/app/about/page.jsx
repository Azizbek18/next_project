import React from 'react'
import { Inter } from 'next/font/google'
import VideoSectionPage from '@/components/videosection'
import LatestSection from '@/components/latestsection'

const inter = Inter(
{
subsets: ['latin'],
weight: '700',
}
)

function AboutPage() {
return (
<div>
  <div className="container py-[40px] px-[20px] max-w-[1280px] mx-auto ">
    <div className="flex flex-col-reverse   relative justify-between gap-6 items-center py-[60px] ">
      <img className='absolute w-[60px] top-[420px] right-[10px] lg:bottom-[100px] lg:right-[-50px] ' src="/images/circle.svg" alt="circle" />
      <div className="w-full lg:w-[50%] flex flex-col items-center ">
        <h2 className='font-poppins text-center lg:text-start py-[10px] font-[700] text-[40px] lg:text-[60px] leading-[60px] lg:leading-[72px] tracking-[-3%] '>
          We value human, organizational, and operational intelligence, not just artificial
        </h2>
        <p className='font-poppins text-center  py-[10px] mb-[15px] font-[500] text-[18px] leading-[30px] tracking-[0%]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.
        </p>
        <button
          className='bg-[#F58A07] mt-[5px] text-white hover:bg-white border-2 border-white hover:border-[#F58A07] hover:border-2 hover:text-[#F58A07] rounded-[25px]  px-[25px] py-[15px] font-poppins font-[600] text-[16px] leading-[107%] tracking-[0px] cursor-pointer '>
          Work With Us
        </button>
      </div>
      <div className=" w-full lg:w-[45%] h-[400px] lg:h-[550px] rounded-[20px] overflow-hidden ">
        <div className="absolute w-[100px] lg:w-[150px] mix-blend-multiply bg-[#F58A07] rounded-l-[20px] h-[400px] lg:h-[550px] "></div>
        <img className='w-[100%] h-[100%] object-cover object-center ' src="/images/photo.png"
          alt="About section photo" />
      </div>
    </div>
    <div className="">
      <div className="flex justify-between flex-col lg:flex-row ">
        <h3 className='w-full lg:w-[50%] text-center lg:text-start font-poppins font-[600] text-[44px] leading-[56px] tracking-[-3%] '>
          The energy of a start-up combined with 30 years of experience.
        </h3>
        <p
          className='w-full lg:w-[50%] text-center lg:text-start font-poppins font-[500] py-[30px] text-[#1D3444] text-[20px] leading-[30px] tracking-[0%] '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit
          elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.
        </p>
      </div>
      <div className="flex justify-between flex-col lg:flex-row  py-[20px] lg:py-[60px] ">
        <div className="">
          <h4 className={`${inter.className} text-center lg:text-start  font-[700] mb-2 text-[36px] text-[#F58A07] leading-[50px] tracking-[0px]
            `}>
            15+
          </h4>
          <h4 className='font-poppins text-center lg:text-start font-[600] text-[24px] leading-[107%] tracking-[-3%] '>
            Awards received
          </h4>
          <p className='font-poppins text-center lg:text-start py-[20px] font-[500] text-[16px] leading-[28px] tracking-[0px] text-[#5B5B5B] '>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscin. Curabitur <br /> sit amet eros elit et.
          </p>
        </div>
        <div className="">
          <h4 className={`${inter.className} mb-2 text-center lg:text-start font-[700] text-[36px] text-[#F58A07] leading-[50px] tracking-[0px]
            `}>
            500+
          </h4>
          <h4 className='font-poppins font-[600] text-center lg:text-start text-[24px] leading-[107%] tracking-[-3%] '>
            Clients served
          </h4>
          <p className='font-poppins py-[20px] text-center lg:text-start font-[500] text-[16px] leading-[28px] tracking-[0px] text-[#5B5B5B] '>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscin. Curabitur <br /> sit amet eros elit et.
          </p>
        </div>
        <div className="">
          <h4 className={`${inter.className} mb-2 text-center lg:text-start font-[700] text-[36px] text-[#F58A07] leading-[50px] tracking-[0px]
            `}>
            34+
          </h4>
          <h4 className='font-poppins font-[600] text-center lg:text-start text-[24px] leading-[107%] tracking-[-3%] '>
            Employees
          </h4>
          <p className='font-poppins py-[20px] text-center lg:text-start font-[500] text-[16px] leading-[28px] tracking-[0px] text-[#5B5B5B] '>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscin. Curabitur <br /> sit amet eros elit et.
          </p>
        </div>
        <div className="">
          <h4 className={`${inter.className} mb-2 text-center lg:text-start font-[700] text-[36px] text-[#F58A07] leading-[50px] tracking-[0px]
            `}>
            130+
          </h4>
          <h4 className='font-poppins font-[600] text-center lg:text-start text-[24px] leading-[107%] tracking-[-3%] '>
            Custom solutions
          </h4>
          <p className='font-poppins py-[20px] text-center lg:text-start font-[500] text-[16px] leading-[28px] tracking-[0px] text-[#5B5B5B] '>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscin. Curabitur <br /> sit amet eros elit et.
          </p>
        </div>
      </div>
    </div>
    <div className="flex flex-col-reverse lg:flex-row relative gap-5 justify-between items-center py-[60px] ">
      <div className="w-full lg:w-[50%] ">
        <h2 className='font-poppins text-center lg:text-start text-[#0D1317] py-[10px] font-[700] text-[30px] lg:text-[48px] leading-[56px] tracking-[-3%] '>
          We want to get local identification in every corner of the world in this era of global citizenship.
        </h2>
        <p className='font-poppins text-center lg:text-start py-[10px] mb-[15px] font-[500] text-[18px] leading-[30px] tracking-[0%]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Curabitur sit amet eros blandit, hendrerit
          elit et, mattis purus. Vivamus commodo suscipit tellus et  pellentesque.
        </p>
      </div>
      <div className="w-full lg:w-[40%] h-[400px] lg:h-[550px]  rounded-[20px] overflow-hidden ">
        <div
          className="bg-[#F58A07] top-[355px] right-[-10px] lg:bottom-9 lg:right-[-20px] absolute z-10 w-[120px] lg:w-[200px] h-[120px] lg:h-[200px] rounded-[20px] mix-blend-multiply ">
        </div>
        <img className='w-[100%] h-[100%] object-cover filter grayscale object-center ' src="/images/dasturchilar.png"
          alt="About section photo" />
      </div>
    </div>
    <div className="py-[20px] ">
      <h3 className='font-poppins text-center lg:text-start py-[10px] font-[600] text-[48px] leading-[56px] tracking-[-3%] '>
        Teamwork is the only way we work
      </h3>
      <p className='font-poppins  text-center lg:text-start py-[10px] mb-12 text-[#5B5B5B] font-[500] text-[18px] leading-[30px] tracking-[0px] '>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros  blandit, hendrerit elit
        et,
        mattis purus. Vivamus commodo suscipit tellus et  pellentesque.
      </p>
      <div className="flex flex-col px-[30px] lg:px-[0px] lg:flex-row items-center gap-8 lg:gap-0 lg:justify-between">
        <div className="w-full  lg:w-[290px] h-[350px] lg:h-[480px] relative group rounded-[20px] overflow-hidden">
          <img src="/images/avatar1.png" alt="avatar"
            className="w-full h-[120%] object-cover object-[top] origin-[50%_20%] filter grayscale transform scale-[1.5]" />
            <div
            className="absolute top-[280px] w-full lg:w-[290px] rounded-[20px] h-[150px] lg:h-[200px] bg-black p-5 z-10 transform translate-y-[200px] transition-all duration-[800ms] ease-in-out group-hover:translate-y-0">
            <h5 className='font-poppins py-1 font-[600] text-[16px] text-white leading-[16px] trancing-[0px] '>
            Support Assist
            </h5>
            <h3 className='font-poppins py-2 font-[600] text-[24px] text-white leading-[32px] trancing-[0px]'>
            Selby Stuart
            </h3>
            <p className='font-poppins font-[500] text-white text-[16px] leading-[199%] trancing-[0px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros.
            </p>
          </div>
        </div>
        <div className="w-full  lg:w-[290px] h-[350px] lg:h-[480px] relative group rounded-[20px] overflow-hidden">
          <img src="/images/avatar2.png" alt="avatar"
            className="w-full h-[100%] object-cover object-[top] origin-[50%_20%] filter grayscale" />
            <div
            className="absolute top-[280px] w-[290px] rounded-[20px] h-[200px] bg-black p-5 z-10 transform translate-y-[200px] transition-all duration-[800ms] ease-in-out group-hover:translate-y-0">
            <h5 className='font-poppins py-1 font-[600] text-[16px] text-white leading-[16px] trancing-[0px] '>
            Support Assist
            </h5>
            <h3 className='font-poppins py-2 font-[600] text-[24px] text-white leading-[32px] trancing-[0px]'>
            Adrian Bennett
            </h3>
            <p className='font-poppins font-[500] text-white text-[16px] leading-[199%] trancing-[0px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros.
            </p>
          </div>
        </div>
        <div className="w-full  lg:w-[290px] h-[350px] lg:h-[480px] relative group rounded-[20px] overflow-hidden">
          <img src="/images/avatar3.png" alt="avatar"
            className="w-full h-[100%] object-cover object-[top]  filter grayscale " />
            <div
            className="absolute top-[280px] w-[290px] rounded-[20px] h-[200px] bg-black p-5 z-10 transform translate-y-[200px] transition-all duration-[800ms] ease-in-out group-hover:translate-y-0">
            <h5 className='font-poppins py-1 font-[600] text-[16px] text-white leading-[16px] trancing-[0px] '>
            Support Assist
            </h5>
            <h3 className='font-poppins py-2 font-[600] text-[24px] text-white leading-[32px] trancing-[0px]'>
            Marcus Lee
            </h3>
            <p className='font-poppins font-[500] text-white text-[16px] leading-[199%] trancing-[0px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros.
            </p>
          </div>
        </div>
        <div className="w-full  lg:w-[290px] h-[350px] lg:h-[480px] relative  group rounded-[20px] overflow-hidden">
          <img src="/images/avatar4.png" alt="avatar"
            className="w-full h-[100%] object-cover object-[top] origin-[50%_20%] filter grayscale" />
          <div
            className="absolute top-[280px] w-[290px] rounded-[20px] h-[200px] bg-black p-5 z-10 transform translate-y-[200px] transition-all duration-[800ms] ease-in-out group-hover:translate-y-0">
            <h5 className='font-poppins py-1 font-[600] text-[16px] text-white leading-[16px] trancing-[0px] '>
            Support Assist
            </h5>
            <h3 className='font-poppins py-2 font-[600] text-[24px] text-white leading-[32px] trancing-[0px]'>
            Thomas Carter
            </h3>
            <p className='font-poppins font-[500] text-white text-[16px] leading-[199%] trancing-[0px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <VideoSectionPage/>
  <LatestSection/>
</div>
)
}

export default AboutPage