import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../App.css"



// import required modules
import { Pagination } from "swiper/modules";

function Category() {
  let categoryData = [
    {
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3Ryb25pYyUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      category: "electronic",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "tables",
    },
    {
      image:
        "https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "male",
    },
    {
      image:
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      category: "boots",
    },
    {
      image:
        "https://images.unsplash.com/photo-1691480250099-a63081ecfcb8?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "bags",
    },
    {
      image:
        "https://images.unsplash.com/photo-1581557991964-125469da3b8a?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "toys",
    },
  ];
  return (
    <div>
      <h3 className="text-center mt-[100px] text-[3rem] font-medium leading-none">
        You Might Like
      </h3>
      <p className="text-center text-[1.1rem] leading-none mt-[20px]">
        Our products are designed for everyone, environmentally friendly.
      </p>

      <div className=" px-[0px] py-[10px] mt-[0px]  w-full">
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          250: {
            slidesPerView: 1,
   
          },
          300: {
            slidesPerView: 2,
     
          },
          482: {
            slidesPerView: 3,
       
          },
          655: {
            slidesPerView: 4,
       
          },
          860: {
            slidesPerView: 5,
       
          }
        }}
       
        modules={[Pagination]}
        className="mySwiper"
      >
        {categoryData.map((cur,index) => {
          return (
            <SwiperSlide key={index} className="py-[50px] flex justify-center ">
              <div className="w-[300px]">
              <div className="w-full flex justify-center items-center ">
                <Link to={`/category/${cur.category}`}>
                  <img
                    src={cur.image}
                    alt=""
                    className="w-[160px] aspect-square rounded-full object-cover"
                  />
                </Link>
              </div>
              <p className="text-center text-[1.2rem] mt-[20px]">{cur.category}</p>
              </div>
            </SwiperSlide>
          );
        })}
        </Swiper>
      </div>
    </div>
  );
}

export default Category;
