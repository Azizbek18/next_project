import LatestSection from '@/components/latestsection'
import VideoSectionPage from '@/components/videosection'
import Link from 'next/link'
import React from 'react'

function CareersPage() {
return (
<div>
  <div className="container max-w-[1280px] mx-auto ">
    <div className="flex relative justify-between items-center py-[60px] ">
      <img className='absolute top-[150px] right-[-50px] ' src="/images/circle.svg" alt="circle" />
      <div className="w-[45%] ">
        <h2 className='font-poppins py-[10px] font-[700] text-[60px] leading-[72px] tracking-[-3%] '>
          We hired people who are very passionate about what they do
        </h2>
        <p className='font-poppins py-[10px] mb-[15px] font-[500] text-[18px] leading-[30px] tracking-[0%]'>
          Through True Rich Attended does no end it his mother since <br /> real had half every him case in packages
          enquire we up <br /> ecstatic unsatiable saw.
        </p>
        <button
          className='bg-[#F58A07] mt-[5px] text-white hover:bg-white border-2 border-white hover:border-[#F58A07] hover:border-2 hover:text-[#F58A07] rounded-[25px]  px-[25px] py-[15px] font-poppins font-[600] text-[16px] leading-[107%] tracking-[0px] cursor-pointer '>
          Work With Us
        </button>
      </div>
      <div className=" w-[45%] h-[550px] rounded-[20px] overflow-hidden ">
        <div className="absolute w-[150px] mix-blend-multiply bg-[#F58A07] rounded-l-[20px] h-[550px] "></div>
        <img className='w-[100%] h-[100%] object-cover object-center ' src="/images/jamoa2.png"
          alt="About section photo" />
      </div>
    </div>
    <div className=" ">
      <h3 className='font-[600] text-[48px] leading-[56px] tracking-[-3%] '>
        See our open positions
      </h3>
      <div className="grid grid-cols-3 gap-6 py-[60px] ">
        <div className="bg-[#C1E4FF4D] rounded-[20px] py-4 px-[30px] ">
          <h4 className='font-[500] py-2 text-[22px] leading-[30px] tracking-[-3%] '>
            Full Stack Developer
          </h4>
          <p className='font-[500] text-[#394149] mb-[15px]  text-[18px] leading-[28px] tracking-[0px] '>
            Bengaluru · Full Time
          </p>
          <Link className='font-[400] text-[#F58A07] text-[18px] leading-[107%] tracking-[0px] ' href='#'>
          Apply Now
          </Link>
        </div>
        <div className="bg-[#C1E4FF4D] rounded-[20px] py-4 px-[30px] ">
          <h4 className='font-[500] py-2 text-[22px] leading-[30px] tracking-[-3%] '>
          Testing Engineer
          </h4>
          <p className='font-[500] text-[#394149] mb-[15px]  text-[18px] leading-[28px] tracking-[0px] '>
            Bengaluru · Full Time
          </p>
          <Link className='font-[400] text-[#F58A07] text-[18px] leading-[107%] tracking-[0px] ' href='#'>
          Apply Now
          </Link>
        </div>
        <div className="bg-[#C1E4FF4D] rounded-[20px] py-4 px-[30px] ">
          <h4 className='font-[500] py-2 text-[22px] leading-[30px] tracking-[-3%] '>
          Hr Manager+
          </h4>
          <p className='font-[500] text-[#394149] mb-[15px]  text-[18px] leading-[28px] tracking-[0px] '>
          Mumbai · Full Time 
          </p>
          <Link className='font-[400] text-[#F58A07] text-[18px] leading-[107%] tracking-[0px] ' href='#'>
          Apply Now
          </Link>
        </div>
        <div className="bg-[#C1E4FF4D] rounded-[20px] py-4 px-[30px] ">
          <h4 className='font-[500] py-2 text-[22px] leading-[30px] tracking-[-3%] '>
            Full Stack Developer
          </h4>
          <p className='font-[500] text-[#394149] mb-[15px]  text-[18px] leading-[28px] tracking-[0px] '>
            Bengaluru · Full Time
          </p>
          <Link className='font-[400] text-[#F58A07] text-[18px] leading-[107%] tracking-[0px] ' href='#'>
          Apply Now
          </Link>
        </div>
        <div className="bg-[#C1E4FF4D] rounded-[20px] py-4 px-[30px] ">
          <h4 className='font-[500] py-2 text-[22px] leading-[30px] tracking-[-3%] '>
          Testing Engineer
          </h4>
          <p className='font-[500] text-[#394149] mb-[15px] text-[18px] leading-[28px] tracking-[0px] '>
            Bengaluru · Full Time
          </p>
          <Link className='font-[400]  text-[#F58A07] text-[18px] leading-[107%] tracking-[0px] ' href='#'>
          Apply Now
          </Link>
        </div>
      </div>
    </div>
  </div>
  <LatestSection/>
</div>
)
}

export default CareersPage