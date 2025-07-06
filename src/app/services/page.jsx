import LatestSection from '@/components/latestsection'
import VideoSectionPage from '@/components/videosection'
import { Poppins } from 'next/font/google'
import React from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

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
    <div className="flex relative justify-between items-center py-[60px] ">
      <div className=" w-[45%] h-[520px] rounded-[20px] overflow-hidden ">
        <div className="absolute w-[100px] h-[100px] top-[180px] left-[-50px] z-10 rounded-[20px] mix-blend-multiply bg-[#F58A07] "></div>
        <img className='w-[100%] h-[100%] object-cover filter grayscale object-center ' src="/images/servise1.png"
          alt="About section photo" />
      </div>
      <div className="w-[45%] ">
        <h2 className='font-poppins py-[10px] font-[700] text-[60px] leading-[72px] tracking-[-3%] '>
        Business strategy
        </h2>
        <p className='font-poppins text-[#5B5B5B] py-[10px] mb-[15px] font-[500] text-[18px] leading-[30px] tracking-[0%]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Aliquam leo odio, sagittis quis ornare quis.met, consectetur <br /> adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.
        </p>
        <ul className=' list-disc text-[#5B5B5B] px-[20px] '>
          <li>
            <p className='service'>
            Cost strategy
            </p>
          </li>
          <li>
            <p className='service'>
            Differentiated product or service strategy
            </p>
          </li>
          <li>
            <p className='service'>
            Focus on a niche strategy
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div className="flex relative justify-between items-center py-[60px] ">
      <div className="w-[45%] ">
        <h2 className='font-poppins py-[10px] font-[700] text-[60px] leading-[72px] tracking-[-3%] '>
        Business strategy
        </h2>
        <p className='font-poppins text-[#5B5B5B] py-[10px] mb-[15px] font-[500] text-[18px] leading-[30px] tracking-[0%]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam <br /> leo odio, sagittis quis ornare quis.met, consectetur adipiscing <br /> elit. Aliquam leo odio, sagittis quis ornare quis. Lorem ipsum <br /> dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, <br /> sagittis.  
        </p>
      </div>
      <div className=" w-[45%] h-[500px] rounded-[20px] overflow-hidden ">
        <div className="absolute w-[100px] h-[100px] top-[280px] right-[-45px] z-10 rounded-[20px] mix-blend-multiply bg-[#F58A07] "></div>
        <img className='w-[100%] h-[100%] object-cover filter grayscale object-center ' src="/images/service2.png"
          alt="About section photo" />
      </div>
    </div>
    <div className="flex relative justify-between items-center py-[60px] ">
      <div className=" w-[45%] h-[520px] rounded-[20px] overflow-hidden ">
        <div className="absolute w-[100px] h-[100px] top-[180px] left-[-50px] z-10 rounded-[20px] mix-blend-multiply bg-[#F58A07] "></div>
        <img className='w-[100%] h-[100%] object-cover filter grayscale object-center ' src="/images/secvice3.png"
          alt="About section photo" />
      </div>
      <div className="w-[45%] ">
        <h2 className='font-poppins py-[10px] font-[700] text-[60px] leading-[72px] tracking-[-3%] '>
        Risk assessment
        </h2>
        <p className='font-poppins text-[#5B5B5B] py-[10px] mb-[15px] font-[500] text-[18px] leading-[30px] tracking-[0%]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Aliquam leo odio, sagittis quis ornare quis.met, consectetur <br /> adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.
        </p>
        <ul className=' list-disc text-[#5B5B5B] px-[20px] '>
          <li>
            <p className='service'>
            Individual risk assessment
            </p>
          </li>
          <li>
            <p className='service'>
            Systems risk assessment
            </p>
          </li>
          <li>
            <p className='service'>
            Mathematical conceptualization
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div className="flex relative justify-between items-center py-[60px] ">
      <div className="w-[45%] ">
        <h2 className='font-poppins py-[10px] font-[700] text-[48px] leading-[72px] tracking-[-3%] '>
        Artificial intelligence
        </h2>
        <p className='font-poppins text-[#5B5B5B] py-[10px] mb-[15px] font-[500] text-[18px] leading-[30px] tracking-[0%]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam <br /> leo odio, sagittis quis ornare quis.met, consectetur adipiscing <br /> elit. Aliquam leo odio, sagittis quis ornare quis. Lorem ipsum <br /> dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, <br /> sagittis.  
        </p>
      </div>
      <div className=" w-[45%] h-[500px] rounded-[20px] overflow-hidden ">
        <div className="absolute w-[100px] h-[100px] top-[280px] right-[-45px] z-10 rounded-[20px] mix-blend-multiply bg-[#F58A07] "></div>
        <img className='w-[100%] h-[100%] object-cover filter grayscale object-center ' src="/images/service4.png"
          alt="About section photo" />
      </div>
    </div>
    <div className="flex relative justify-between items-center py-[60px] ">
      <div className=" w-[45%] h-[520px] rounded-[20px] overflow-hidden ">
        <div className="absolute w-[100px] h-[100px] top-[380px] left-[-50px] z-10 rounded-[20px] mix-blend-multiply bg-[#F58A07] "></div>
        <img className='w-[100%] h-[100%] object-cover filter grayscale object-center ' src="/images/service5.png"
          alt="About section photo" />
      </div>
      <div className="w-[45%] ">
        <h2 className='font-poppins py-[10px] font-[700] text-[60px] leading-[72px] tracking-[-3%] '>
        Smart Contracts
        </h2>
        <p className='font-poppins text-[#5B5B5B] py-[10px] mb-[15px] font-[500] text-[18px] leading-[30px] tracking-[0%]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Aliquam leo odio, sagittis quis ornare quis.met, consectetur <br /> adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.
        </p>
        <ul className=' list-disc text-[#5B5B5B] px-[20px] '>
          <li>
            <p className='service'>
            Smart contract implementation
            </p>
          </li>
          <li>
            <p className='service'>
            Smart legal contracts
            </p>
          </li>
          <li>
            <p className='service'>
            Basic contract law
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <VideoSectionPage/>
  <LatestSection/>
</div>
)
}

export default ServicesPage