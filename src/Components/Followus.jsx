import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../App.css"
// import required modules
import { Pagination } from "swiper/modules";

function Followus() {
    const follows = [
        {
            url:'https://images.unsplash.com/photo-1628015081036-0747ec8f077a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
            id:1,
            link:''
        },
        {
            url:'https://images.unsplash.com/photo-1704642407551-7c4c82f644b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
            id:2,
            link:''
        },
        {
            url:'https://images.unsplash.com/photo-1704636487563-8e7c4802680e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D',
            id:3,
            link:''
        },
        {
            url:'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVufGVufDB8fDB8fHww',
            id:4,
            link:''
        }
    ]
  return (
    <div>
        <h3 className="text-center mt-[100px] text-[3rem] font-medium leading-none px-3">
        Follow Us
      </h3>
      <p className="text-center text-[1.1rem] leading-none mt-[20px] px-3">
      Inspire and let yourself be inspired, from one unique fashion to another.
      </p>
      <div className='mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-auto max-w-[950px] gap-x-4 place-content-center place-items-center gap-y-4 px-4'>
       {
        follows.map((cur)=>
        <div className='max-w-[200px] w-full aspect-square h-auto  object-cover overflow-hidden cursor-pointer rounded-lg relative ' key={cur.id}>
        <img src={cur.url} className=' duration-500 hover:scale-110 grayscale-[50%] hover:grayscale-0' alt="" />
        <i className="ri-instagram-line w-[50px] h-[50px] rounded-full flex justify-center bg-white items-center absolute top-[50%] left-[50%] text-xl -translate-x-[50%] -translate-y-[50%] opacity-60 object-cover "></i>
    </div>
        )
       }
      </div>
    </div>
  )
}

export default Followus