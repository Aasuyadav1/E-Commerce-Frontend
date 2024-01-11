import React from "react";
import Button from "./Button";

function Footer() {
  return (
    <div className="px-4 py-14 mt-24 grid grid-cols-1 gap-y-10 lg:grid-cols-4 lg:gap-x-2 border-y-[2px] border-[rgb(219,219,221)] border-solid">
      <div>
        <img
          src="https://umino.mageblueskytech.com/media/logo/default/logo_umino.png"
          alt="logo"
          className="max-w-[100px] h-auto"
        />
        <p className="mt-4 opacity-90">
          268 St, South New York/NY 98944, United States 222-1800-2628
        </p>
        <p className="opacity-90">blueskytechcompany@gmail.com</p>
        <div className="flex gap-2 mt-3">
          <i className="ri-facebook-line w-8 aspect-square rounded-full border-[#555555] border-[2px] border-solid text-xl opacity-90 cursor-pointer flex justify-center items-center text-[#555555]"></i>
          <i className="ri-twitter-x-line w-8 aspect-square rounded-full border-[#555555] border-[2px] border-solid text-xl opacity-90 cursor-pointer flex justify-center items-center text-[#555555]"></i>
          <i className="ri-youtube-line w-8 aspect-square rounded-full border-[#555555] border-[2px] border-solid text-xl opacity-90 cursor-pointer flex justify-center items-center text-[#555555]"></i>
          <i className="ri-github-fill w-8 aspect-square rounded-full border-[#555555] border-[2px] border-solid text-xl opacity-90 cursor-pointer flex justify-center items-center text-[#555555]"></i>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-xl">HOT CATEGORIES</h3>
        <ul className="mt-1 list-none flex flex-col gap-2">
          <li className="">Special Offers</li>
          <li className="">Performance</li>
          <li className="">T-shirts</li>
          <li className="">Underwear</li>
          <li className="">Top Brands</li>
          <li className="">Online Exclusive</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-xl">CUSTOMER SERVICE</h3>
        <ul className="mt-1 list-none flex flex-col gap-2">
          <li className="">My Account</li>
          <li className="">About</li>
          <li className="">My Cart</li>
          <li className="">Wishlist</li>
          <li className="">Privacy Policy</li>
          <li className="">Theme FAQs</li>
          <li className="">Store Locations</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-xl">SIGN UP TO NEWSLETTER</h3>
        <p className="mt-1 opacity-90">Enter your email address to get $10 off your first order and free shipping. Updates information on Sales and Offers.</p>
        <form className="sm:flex items-center mt-4 flex flex-col gap-4" onSubmit={(e)=>e.preventDefault()}>
          <input type="email" placeholder="Your Email" className="px-[8px] py-[10px] border-black border-[2px] w-full border-solid rounded-full " required/>
          <Button title="Subscribe" class="bg-black text-white px-10 w-full"/>
        </form>
      </div>
    </div>
  );
}

export default Footer;
