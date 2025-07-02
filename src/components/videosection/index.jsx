'use client'
import Image from 'next/image'
import React, { useState } from 'react'

function VideoSectionPage() {
const [play,setPlay] = useState(false);
return (
<div>
  <div className="container py-[80px] flex justify-between items-center mx-auto max-w-[1280px] ">
    <div className="w-[40%] ">
      <h3 className='font-poppins font-[600] text-[48px] leading-[56px] tracking-[-3%] '>
        Finsweet was a dream to work with
      </h3>
      <p className='font-poppins font-[500] text-[17px] py-[5px] text-[#5B5B5B] leading-[30px] tracking-[0px] '>
        Maecenas efficitur scelerisque lorem, et varius lacus tincidunt vel. Pellentesque a arcu vitae diam dapibus
        mattis vel vel orci. Vivamus eleifend nec felis vel auctor.
      </p>
      <div className="flex py-[25px] items-center gap-4 ">
        <div className="w-[40px] h-[40px] relative rounded-[50%] overflow-hidden ">
          <Image className='object-cover' fill src='/images/img.png' alt='avatar' />
        </div>
        <div className=" flex  flex-col ">
          <h4 className='font-poppins text-[#063255] font-[500] text-[20px] leading-[120%] tracking-[0px] '>
            Chikelu Neo
          </h4>
          <p className='font-poppins text-[#F58A07] font-[500] text-[16px] leading-[120%] tracking-[0px] '>
            CEO at MazeAI
          </p>
        </div>
      </div>
    </div>
    <div className="w-[50%] ">
      <div className="w-full rounded-xl overflow-hidden relative">
        {play ? (
        <video controls autoPlay className="w-full h-auto">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        ) : (
        <div onClick={()=> setPlay(true)}
          className="relative cursor-pointer group"
          >
          <img src="/images/microfon.png" alt="Video preview" className="w-full h-[500px] rounded-[20px] object-cover" />
          <div className="absolute bottom-10 left-10 flex items-center gap-4 px-3  rounded-full">
            <div className="bg-white rounded-[50%] w-[40px] h-[40px] flex justify-center items-center ">
            <img src="/images/uchburchak.svg" alt="uchburchak " />
            </div>
            <span className="text-lg font-medium text-white">Play Video</span>
          </div>
        </div>
        )}
      </div>
    </div>
  </div>
</div>
)
}

export default VideoSectionPage