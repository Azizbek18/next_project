import Link from 'next/link'
import React from 'react'
function Footer() {
return (
<div className='bg-[#063255] relative '>
  <img className='absolute left-0 w-[30px]  bottom-0' src="/images/Footer.svg" alt="Footer photo" />
  <img className='absolute right-0 w-[30px] top-10 ' src="/images/Bezak.svg" alt="Footer photo" />
  <div className="container px-[20px] max-w-[1280px] mx-auto py-[60px]">
    <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-4 justify-between">
      <div className="flex flex-col gap-6">
        <Link href="/">
        <img src="/images/Logo_footer.svg" alt="Sayt logosi" />
        </Link>
        <h2 className='font-poppins font-[600] text-white text-[36px] leading-[40px]  '>
          Bespoke software <br /> solutions
        </h2>
        <div className="flex gap-4 ">
          <Link href="https://facebook.com" target="_blank">
          <img src="/images/facebook.svg" alt="facebook" />
          </Link>
          <Link href="https://youtube.com" target="_blank">
          <img src="/images/youtube.svg" alt="YouTube" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
          <img src="/images/instagram.svg" alt="Instagram" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
          <img src="/images/twitter.svg" alt="Twitter" />
          </Link>
        </div>
      </div>
      <div className="flex justify-between ">
        <div className="flex flex-col gap-6 ">
          <h3 className="font-poppins text-white font-semibold text-[18px] leading-[100%] tracking-normal">
            Company
          </h3>
          <ul className='flex flex-col gap-2'>
            <li>
              <Link className="font-poppins text-white font-medium text-[16px] leading-[100%] tracking-normal"
                href='/about'>
              About Us
              </Link>
            </li>
            <li>
              <Link className="font-poppins text-white font-medium text-base leading-[100%] tracking-normal"
                href='/careers'>
              Careers
              </Link>
            </li>
            <li>
              <Link className="font-poppins text-white font-medium text-base leading-[100%] tracking-normal"
                href='/services'>
              Services
              </Link>
            </li>
            <li>
              <Link className="font-poppins text-white font-medium text-base leading-[100%] tracking-normal"
                href='/blog'>
              Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6 ">
          <h3 className="font-poppins text-white font-semibold text-[18px] leading-[100%] tracking-normal">
            Connect
          </h3>
          <ul className='flex flex-col gap-2'>
            <li>
              <Link className="font-poppins text-white font-medium text-[16px] leading-[100%] tracking-normal"
                href='tel:hi@finsweet.com'>
              hi@finsweet.com
              </Link>
            </li>
            <li>
              <Link className="font-poppins text-white font-medium text-base leading-[100%] tracking-normal"
                href='tel:+(123) 456-7890'>
              +(123) 456-7890
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-[300px] gap-6 ">
        <h3 className="font-poppins text-white font-semibold text-[18px] leading-[100%] tracking-normal">
          Join Newsletter
        </h3>
        <form className='flex mt-1 gap-3 flex-col' action="#">
          <input
            className='bg-white rounded-[30px] outline text-[#505050] w-full h-[45px] px-[18px] text-[16px] font-[500] '
            placeholder='Type email here' type="text" />
          <button
            className='bg-[#F58A07] hover:bg-[#063255] hover:border-2 border-[#F58A07] hover:text-[#F58A07] w-[140px] rounded-[30px]  h-[45px] text-white font-poppins font-semibold text-[18px] leading-[107%] tracking-normal capitalize '>Subscribe</button>
        </form>
      </div>
    </div>
    <div className="flex flex-col lg:flex-row justify-between mt-[65px] ">
      <h4 className='font-[500] text-center lg:text-start text-white text-[16px] '>
        © All rights reserved – Finsweet
      </h4>
      <div className=" flex justify-center lg:justify-start gap-4">
        <Link className='font-[500] text-white text-[16px] ' href='#'>
        Privacy Policy
        </Link>
        <Link className='font-[500] text-white text-[16px] ' href='#'>
        Terms & Conditions
        </Link>
      </div>
    </div>
  </div>
</div>
)
}

export default Footer