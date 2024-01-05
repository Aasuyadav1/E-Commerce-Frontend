import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    
  return (
    <div className=' bg-[url(https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] min-h-screen w-full px-[50px] py-[200px] bg-left bg-no-repeat bg-cover'>
        <div className='flex flex-col gap-[10px]'>
            <p className='uppercase text-[1rem] font-medium'>Original tools</p>
            <h3 className='text-[5rem] leading-none'>Original</h3>
            <p className='mt-[20px]'>Upgrade your home with our amazing assortement of decor.</p>
            <Link>
            <button className='py-[15px] px-[50px] bg-[#111111] inline-block font-semibold text-white rounded-full mt-[30px]'>EXPLORE NOW</button>
            </Link>
        </div>
        
    </div>
  )
}

export default Hero