import React from 'react'

function FeautureSection() {
    const infor = [
        {
            img:'/images/Icon.svg',
            title:'Invoicing',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, '
        },
        {
            img:'/images/Icon2.svg',
            title:'Support',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, '
        },
        {
            img:'/images/Icon3.svg',
            title:'Surveying',
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, '
        }
    ]
  return (
    <div className='bg-[#EDF7FF] '>
        <div className="container px-[20px] max-w-[1280px] mx-auto py-[60px] ">
            <div className="">
                <div className="flex flex-col justify-between gap-6 lg:flex-row py-[50px] ">
                    <h3 className=' w-full  lg:w-[45%] text-center mb-[20px] lg:mb-0 lg:text-start font-poppins font-[600] text-[36px] leading-[44px] tracking-[-3%] '>
                    We are building software solution that solves your business  challenges
                    </h3>
                    <p className=' w-full  lg:w-[45%] text-center lg:text-start font-poppins font-[500] text-[18px] leading-[30px] tracking-[0%] '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit  amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo  suscipit tellus et pellentesque.
                    </p>
                </div>
                <ul className='grid  grid-cols-1 lg:grid-cols-3 gap-15 mt-[20px] mb-[15px] justify-between '>
                    {
                        infor.map((item,index)=>(
                            <li className='bg-white py-[50px] px-[40px] rounded-[20px] ' key={index}>
                                <img className='mb-[10px] ' src={item.img} alt="icon" />
                                <h4 className='font-poppins py-[20px] font-[600] text-[24px] leading-[107%] tracking-[-3%] '>
                                    {item.title}
                                </h4>
                                <p className='font-poppins font-[500] text-[16px] leading-[28px] tracking-[0%] text-[#5B5B5B] '>
                                    {item.text}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FeautureSection