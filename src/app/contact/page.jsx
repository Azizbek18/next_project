import React from 'react'

function ContactPage() {
return (
<div>
  <div className="container py-[50px] mx-auto max-w-[1280px] ">
    <div className="">
      <div className="flex justify-between gap-10 items-center ">
        <div className="w-[50%] ">
          <h2 className='font-poppins font-[600] text-[48px] leading-[64px] tracking-[-3%] '>
            Have a question ? Let's <br /> get in touch with us.
          </h2>
        </div>
        <div className="flex w-[50%] gap-[200px] ">
          <div className="">
            <h3 className='font-poppins py-[10px] font-[500] text-[24px] leading-[30px] tracking-[-3%] '>
              Location
            </h3>
            <p className='font-poppins text-[#5B5B5B] font-[500] text-[18px] leading-[30px] tracking-[0px] '>
              DLF Cybercity, Bhubaneswar,<br />
              India, &52050
            </p>
          </div>
          <div className="">
            <h3 className='font-poppins py-[10px] font-[500] text-[24px] leading-[30px] tracking-[-3%] '>
              Contact Us
            </h3>
            <p className='font-poppins text-[#5B5B5B] font-[500] text-[18px] leading-[30px] tracking-[0px] '>
              020 7993 2905
              <br />
              hi@finsweet.com
            </p>
          </div>
        </div>
      </div>
      <p className='font-poppins py-[10px] text-[#5B5B5B] font-[500] text-[18px] leading-[30px] tracking-[0px] '>
        Fill up the Form and ou team will get back to within 24 hrs
      </p>
      <div className="flex justify-between py-[40px] gap-10 ">
        <form className='w-[50%] flex flex-col gap-4 ' action="#">
          <input
            className='w-full h-[45px] bg-[#D2DAED2B] outline-none rounded-[30px] px-[20px] text-gray-500 text-[16px] font-[500] leading-[100%] tracking-0 '
            placeholder='First Name' type="text" />
          <input
            className='w-full h-[45px] bg-[#D2DAED2B] outline-none rounded-[30px] px-[20px] text-gray-500 text-[16px] font-[500] leading-[100%] tracking-0 '
            placeholder='Last Name' type="text" />
          <input
            className='w-full h-[45px] bg-[#D2DAED2B] outline-none rounded-[30px] px-[20px] text-gray-500 text-[16px] font-[500] leading-[100%] tracking-0 '
            placeholder='Email address' type="email" />
          <textarea
            className='w-full h-[140px] bg-[#D2DAED2B] outline-none rounded-[30px] px-[20px] text-gray-500 py-[20px] text-[16px] font-[500] leading-[100%] tracking-0 '
            placeholder='Type message'></textarea>
        </form>
        <div className="w-[50%] rounded-lg overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=... (qolgan qism)" className="w-full h-full"
            style={{ border: 0 }} allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <button
        className='bg-[#F58A07] mt-[5px] text-white hover:bg-white border-2 border-white hover:border-[#F58A07] hover:border-2 hover:text-[#F58A07] rounded-[25px]  px-[25px] py-[15px] font-poppins font-[600] text-[16px] leading-[107%] tracking-[0px] cursor-pointer '>
        Submit
      </button>
    </div>
  </div>
</div>
)
}

export default ContactPage