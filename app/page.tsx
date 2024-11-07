import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w[1271.01px] h[573.59px] top[252.83px] left[107.49px]'>
      <div className='w-[1366px] h-[768px] mt-[115.01px] gap[0px] opacity[opx] bg-[#FFFFFF] flex'>
        <div className='w-[70%]'>
        <h1 className='w-[472.97px] h-[162.53px] top-[270.98px] left-[107.49px] font-bold text-[37.84px] font-serif-700 ml-20 leading-[62.24px] tracking-[0.025em] text-left'
        >IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
        <p className='w-[798.9px] h-[144px] left-[107.49px] font-medium top-[523.71px] gap-[0px] text-[29.24px] leading-[48.1px] tracking-[0.025em] text-left text-[#787054] ml-20 mt-14 font-serif'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>

        <button className='ml-20 w-[247.67px] bg-[#A29875] h-[49.2px] top-[710.32px] left-[
107.49px] rounded-[8.6px] p-[8.6px] gap-[8.6px] mt-10 text-[25.8px] text-[#ffffff] font-serif'>Explore Now</button>
        </div>

        
      
        <div className='mr-20 h-[573.59px] w-[421.38px] top-[252.83px] left[957.13px]'>
         <Image className='rounded-tl-[128.99px] rounded-br-[128.99px] border z-01 '
           src='/slider-1.jpg.png'     
          alt="hero-image"
           width={421.38}
           height={250}
           />

           <div className='w-[350.1px] h-[500.43px] top-[266.91px] left-[915.77px]  rounded-tl-[128.99px] rounded-br-[128.99px] border[0.86px solid #FFFFFF] border-[0.86px] opacity-50 absolute z-05 '>

           </div>
           

      
                   </div>
        
      </div>
    </div>
  )
}

export default page
