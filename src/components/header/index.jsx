'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function Header() {

const [isOpen, setIsOpen] = useState(false);

return (
<div className="sticky top-0 z-50 bg-white ">
  <div className="container max-w-[1280px] px-[20px] mx-auto flex justify-between items-center py-[15px] ">
    <Link href={"/"}> <Image src="/images/Logo.svg" alt='sayt logosi' width={100} height={100} />
    </Link>
    <div className="flex gap-8">
      <ul className='hidden md:flex  items-center gap-8'>
        <li>
          <Link
            className="font-poppins hover:text-[#F58A07] font-semibold text-[18px]  leading-6 tracking-normal capitalize"
            href='/about'>
          About Us
          </Link>
        </li>
        <li>
          <Link
            className="font-poppins hover:text-[#F58A07] font-semibold text-[18px] leading-6 tracking-normal capitalize"
            href='/careers'>
          Careers
          </Link>
        </li>
        <li>
          <Link
            className="font-poppins hover:text-[#F58A07] font-semibold text-[18px] leading-6 tracking-normal capitalize"
            href='/services'>
          Services
          </Link>
        </li>
        <li>
          <Link
            className="font-poppins hover:text-[#F58A07] font-semibold text-[18px] leading-6 tracking-normal capitalize"
            href='/blog'>
          Blog
          </Link>
        </li>
        <li>
          <Link
            className="font-poppins hover:text-[#F58A07] font-semibold text-[18px] leading-6 tracking-normal capitalize"
            href='/contact'>
          Contact us
          </Link>
        </li>
      </ul>
      <button className='bg-[#F58A071A] rounded-[30px] px-[18px] py-[8px] text-[#F58A07] font-[650] '>
        Clone project
      </button>
      <div onClick={()=> setIsOpen(!isOpen)}
        className="relative md:hidden w-[35px] h-[40px] flex gap-3 items-center justify-center cursor-pointer"
        >
        <span className={`absolute w-full h-[3px] bg-black rounded transition-all duration-300 ${ isOpen
          ? 'rotate-40 translate-y-[2px]' : '-translate-y-[8px]' }`}></span>
        <span className={`absolute w-full h-[3px] bg-black rounded transition-all duration-300 ${ isOpen
          ? 'opacity-0 scale-0' : 'opacity-100 scale-100' }`}></span>
        <span className={`absolute w-full h-[3px] bg-black rounded transition-all duration-300 ${ isOpen
          ? '-rotate-40 -translate-y-[2px]' : 'translate-y-[8px]' }`}></span>
      </div>
    </div>
  </div>
  {isOpen && (
  <div className="absolute top-full left-0 w-full bg-white shadow-md z-40 md:hidden animate-slide-down">
    <ul className="flex flex-col justify-center items-center gap-4 py-[80px] px-5">
      <li>
        <Link onClick={()=> setIsOpen(false)} className="text-lg font-medium text-gray-800 hover:text-[#F58A07]"
        href="/about">
        About Us
        </Link>
      </li>
      <li>
        <Link onClick={()=> setIsOpen(false)} className="text-lg font-medium text-gray-800 hover:text-[#F58A07]"
        href="/careers">
        Careers
        </Link>
      </li>
      <li>
        <Link onClick={()=> setIsOpen(false)} className="text-lg font-medium text-gray-800 hover:text-[#F58A07]"
        href="/services">
        Services
        </Link>
      </li>
      <li>
        <Link onClick={()=> setIsOpen(false)} className="text-lg font-medium text-gray-800 hover:text-[#F58A07]"
        href="/blog">
        Blog
        </Link>
      </li>
      <li>
        <Link onClick={()=> setIsOpen(false)} className="text-lg font-medium text-gray-800 hover:text-[#F58A07]"
        href="/contact">
        Contact us
        </Link>
      </li>
    </ul>
  </div>
  )}

</div>
)
}

export default Header