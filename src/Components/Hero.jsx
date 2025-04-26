import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Hero() {
  const buttonHnadle = () => {
    window.scrollTo({
      top: 1200, // Adjust the value based on your desired scroll position
      behavior: "smooth",
    });
  };

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      autoPlay={true}
      showDots={true}
    >
      <div className=" bg-[url(https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] lg:h-screen sm:h-[500px] w-full bg-left bg-no-repeat bg-cover h-[450px] flex items-center  py-4">
        <div className="flex flex-col gap-[10px] mt-16 sm:pl-[80px] px-4">
          <p className="uppercase text-[1rem] font-medium">Original tools</p>
          <h3 className="text-[5rem] leading-none">Original</h3>
          <p className="mt-[20px]">
            Upgrade your home with our amazing assortement of decor.
          </p>
          <Link>
            <button
              className="py-[15px] px-[50px] bg-[#111111] inline-block font-semibold text-white rounded-full mt-[30px]"
              onClick={buttonHnadle}
            >
              EXPLORE NOW
            </button>
          </Link>
        </div>
      </div>
      <div className=" bg-[url(https://images.unsplash.com/photo-1518972734183-c5b490a7c637?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] lg:h-screen sm:h-[500px] h-[450px]  w-full  bg-left bg-no-repeat bg-cover flex items-center  ">
        <div className="flex flex-col gap-[10px] mt-16 sm:pl-[80px] px-4">
          <p className="uppercase text-[1rem] font-medium">TOp trending</p>
          <h3 className="text-[5rem] leading-none">Life</h3>
          <p className="mt-[20px]">
            Upgrade your home with our amazing assortement of decor.
          </p>
          <Link>
            <button
              className="py-[15px] px-[50px] bg-[#111111] inline-block font-semibold text-white rounded-full mt-[30px]"
              onClick={buttonHnadle}
            >
              EXPLORE NOW
            </button>
          </Link>
        </div>
      </div>
    </Carousel>
  );
}

export default Hero;
