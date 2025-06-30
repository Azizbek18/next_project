import React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter(
{
subsets: ['latin'],
weight: '700',
}
)

function AboutSection() {

return (
<div>
    <div className="container max-w-[1280px] justify-between py-[80px] flex items-center mx-auto">
        <div className=" w-[44%] ">
            <h3 className='font-poppins font-[600] text-[48px] leading-[56px] tracking-[-3%] '>
                The energy of a start-up combined with 30 years of experience.
            </h3>
            <p className='font-poppins font-[500] py-[30px] text-[18px] leading-[30px] tracking-[0%] '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Curabitur sit amet eros blandit, hendrerit elit br
                et, mattis <br /> purus. Vivamus commodo suscipit tellus et <br /> pellentesque.
            </p>
            <div className="flex justify-between ">
                <div className="">
                    <h4 className={`${inter.className} font-[700] text-[36px] text-[#F58A07] leading-[50px] tracking-[0px] `}>
                    15+
                    </h4>
                    <h4 className='font-poppins font-[600] text-[24px] leading-[107%] tracking-[-3%] '>
                        Awards received
                    </h4>
                    <p className='font-poppins py-[20px] font-[500] text-[16px] leading-[28px] tracking-[0px] text-[#5B5B5B] '>
                        Lorem ipsum dolor sit amet, <br /> consectetur adipiscin. Curabitur <br /> sit amet eros elit et.
                    </p>
                </div>
                <div className="">
                    <h4 className={`${inter.className} font-[700] text-[36px] text-[#F58A07] leading-[50px] tracking-[0px] `}>
                    500+
                    </h4>
                    <h4 className='font-poppins font-[600] text-[24px] leading-[107%] tracking-[-3%] '>
                    Clients served
                    </h4>
                    <p className='font-poppins py-[20px] font-[500] text-[16px] leading-[28px] tracking-[0px] text-[#5B5B5B] '>
                    Lorem ipsum dolor sit amet, <br /> consectetur adipiscin. Curabitur <br /> sit amet eros elit et.
                    </p>
                </div>
            </div>
        </div>
        <div className=" w-[40%] h-[500px] rounded-[20px] overflow-hidden ">
            <div className="absolute w-[120px] mix-blend-multiply bg-[#F58A07] rounded-l-[20px] h-[500px] "></div>
            <img className='w-[100%] h-[100%] object-cover object-center ' src="/images/about.png" alt="About section photo" />
        </div>
    </div>
</div>
)
}

export default AboutSection