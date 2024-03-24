import React from 'react'

export default function JSG() {
  return (
    <>
    <div className='mx-auto mt-10 rounded-xl p-6 space-x-3 flex shadow-lg items-center max-w-sm bg-slate-200'>
      <div className='shrink-0'>
        <img src="http://www.clipartbest.com/cliparts/xcg/Ldk/xcgLdknai.png" alt="chat logo" className='w-12 h-12'/>
      </div>
      <div>
        <div className='text-black text-xl font-medium'>ChitChat</div> 
        <div className='text-slate-500'>You have a new message!</div>
      </div>
    </div>
    <div className='mt-5 space-x-3 max-w-sm p-8 shadow-lg mx-auto rounded-xl flex'>
        <img src="https://th.bing.com/th/id/R.40fc0a71d4d1095b4591a1dbf2b67772?rik=uSTNCh8UTcZVTA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-i_jhNinN9E8%2fTwmDfRpB4xI%2fAAAAAAAAJoU%2fr4g9Lzp64qY%2fs1600%2fBMW_Latest_Luxury-Cars-2012_MyClipta_1.jpg&ehk=ivCre90T168rnEKNrHPp%2b7xCHkUQ8uLHxC8sjwO78vI%3d&risl=&pid=ImgRaw&r=0" alt="bmw logo" className='block mx-auto w-24 h-24 rounded-full'/>
      <div className='space-y-3 items-start'>
        <div className='font-semibold text-xl'>BMW Luxury Series</div>
        <div className='text-slate-500 font-medium'>Top Model</div>
        <div><button className='border border-purple-200 font-semibold text-purple-500 px-3 py-2 rounded-full hover:text-white hover:bg-purple-500 hover:border-transparent focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'>Buy Now</button></div>
      </div>
    </div>
    </>
  )
}
