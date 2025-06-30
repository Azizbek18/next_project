import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white ">
        <div className="container max-w-[1280px] mx-auto flex justify-between items-center py-[15px] ">
          <Link href={"/"}>
            <Image src="/images/Logo.svg" alt='sayt logosi' width={100} height={100} />
          </Link>
          <ul className='flex items-center gap-8'>
            <li>
              <Link className="font-poppins hover:text-[#F58A07] font-semibold text-[18px]  leading-6 tracking-normal capitalize" href='/about' >
              About Us
              </Link>
            </li>
            <li>
              <Link className="font-poppins hover:text-[#F58A07] font-semibold text-[18px] leading-6 tracking-normal capitalize" href='/careers'>
              Careers
              </Link>
            </li>
            <li>
              <Link className="font-poppins hover:text-[#F58A07] font-semibold text-[18px] leading-6 tracking-normal capitalize" href='/services'>
              Services
              </Link>
            </li>
            <li>
              <Link className="font-poppins hover:text-[#F58A07] font-semibold text-[18px] leading-6 tracking-normal capitalize" href='/blog'>
              Blog
              </Link>
            </li>
            <li>
              <Link className="font-poppins hover:text-[#F58A07] font-semibold text-[18px] leading-6 tracking-normal capitalize" href='/contact'>
              Contact us
              </Link>
            </li>
            <li>
              <button className='bg-[#F58A071A] rounded-[30px] px-[18px] py-[8px] text-[#F58A07] font-[650] '>
              Clone project
              </button>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Header