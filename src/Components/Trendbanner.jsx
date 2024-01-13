import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import "../App.css"

function Trendbanner() {
  return (
    <div className='flex gap-[30px] justify-center mt-[80px] max-[1000px]:flex-wrap px-[10px] max-[1000px]:gap-[40px]'>
      <div className='max-w-[650px] w-full rounded-md overflow-hidden max-[1000px]:max-w-full max-[1000px]:h-[372px]'>
      <div className='image-hover relative w-full h-full overflow-hidden z-[1] '>
        <div className='content w-full h-full px-[50px] py-[100px] flex flex-col gap-[10px] max-[518px]:px-[10px] max-[518px]:py-[40px]'>
          <p className='uppercase text-[1rem] font-medium'>HURRY UP! SALE 50% OFF</p>
          <h3 className='text-[3rem] leading-none'>Top Trends Style</h3>
          <p className='mt-[20px]'>In-store and online. Hurry Up! Limited time offer.</p>
          <Link to={'/products/12'}>
            <Button
              title="Shop Now"
              class="py-[8px] px-[60px] bg-[#111111] inline-block font-semibold text-white rounded-full mt-[30px]"
            />
          </Link>
        </div>
      </div>
    </div>
    <div className='max-w-[650px] w-full rounded-md overflow-hidden max-[1000px]:max-w-full max-[1000px]:h-[372px]'>
      <div className='image-hover second relative w-full h-full overflow-hidden z-[1]'>
        <div className='content w-full h-full px-[50px] py-[100px] flex flex-col gap-[10px] max-[518px]:px-[10px] max-[518px]:py-[40px]'>
          <p className='uppercase text-[1rem] font-medium'>HURRY UP! SALE 50% OFF</p>
          <h3 className='text-[3rem] leading-none'>Here’s To You</h3>
          <p className='mt-[20px]'>Discover selected items with many discount.</p>
          <Link to={'/products/52'}>
            <Button
              title="Shop Now"
              class="py-[8px] px-[60px] bg-[#111111] inline-block font-semibold text-white rounded-full mt-[30px]"
            />
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Trendbanner;
