import React, { useState } from "react";
import { Link } from "react-router-dom";

function Createaccount() {
  const [passwordType, setPasswordType] = useState("password");

  const handleCheckBox = (e) => {
    const checkboxValue = e.target.checked;
    checkboxValue ? setPasswordType("text") : setPasswordType("password");
  };
  return (
    <div className="mt-32 px-3">
      <h1 className="text-4xl text-black text-center mt-4 font-semibold px-3">
        Create New Customer Account
      </h1>
      <div className="text-xl text-center justify-center items-center flex gap-1 mt-1 cursor-pointer px-3">
        <Link to="/">Home</Link> /{" "}
        <span className="opacity-70">Create New Customer Account</span>
      </div>

      <form className="sm:mt-24 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-32 gap-y-10 px-3 lg:px-24">
        <div>
          <h1 className="text-black text-2xl font-semibold">
            Personal Information
          </h1>
          <div className="mt-5">
            <label
              htmlFor="name"
              className="block select-none font-medium mb-2 text-xl"
            >
              First Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              required
              className="py-2 px-4 block w-full border-black border-[1px] border-solid  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none rounded-full "
              placeholder="first name"
            />
          </div>
          <div className="mt-5">
            <label
              htmlFor="last"
              className="block select-none font-medium mb-2 text-xl"
            >
              Last Name
            </label>
            <input
              type={passwordType}
              id="last"
              name="last-name"
              className="py-2 px-4 block w-full border-black border-[1px] border-solid  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none rounded-full "
              required
              placeholder="Last name"
            />
            <div className="flex gap-3 mt-5 items-center">
              <input
                type="checkbox"
                id="check"
                name="checkbox"
                className="text-black duration-75 ease-in-out"
               
              />
              <label htmlFor="check" className="cursor-pointer select-none">
                {" "}
                Sign Up for Newsletter
              </label>
            </div>
            <div className="flex gap-3 mt-2 items-center">
              <input
                type="checkbox"
                id="remote"
                name="remote"
                className="text-black duration-75 ease-in-out"
               
              />
              <label htmlFor="remote" className="cursor-pointer select-none">
                {" "}
                Allow remote shopping assistance
              </label>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-black text-2xl font-semibold">
            Sign-in Information
          </h1>
          <div className="mt-5">
            <label
              htmlFor="email"
              className="block select-none font-medium mb-2 text-xl"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="py-2 px-4 block w-full border-black border-[1px] border-solid  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none rounded-full "
              placeholder="email"
            />
          </div>
          <div className="mt-5">
            <label
              htmlFor="pass"
              className="block select-none font-medium mb-2 text-xl"
            >
              Password
            </label>
            <input
              type={passwordType}
              id="pass"
              name="pass"
              className="py-2 px-4 block w-full border-black border-[1px] border-solid  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none rounded-full "
              required
              placeholder="password"
            />
            <div className="mt-5">
            <label
              htmlFor="conpass"
              className="block select-none font-medium mb-2 text-xl"
            >
              Confirom Password
            </label>
            <input
              type={passwordType}
              id="conpass"
              name="conpass"
              className="py-2 px-4 block w-full border-black border-[1px] border-solid  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none rounded-full "
              required
              placeholder="Confirom password"
            />
            </div>
            <div className="flex gap-3 mt-5 items-center">
              <input
                type="checkbox"
                id="checkpass"
                name="checkbox"
                className="text-black duration-75 ease-in-out"
                onChange={handleCheckBox}
              />
              <label htmlFor="checkpass" className="cursor-pointer select-none">
                {" "}
                Sign Up for Newsletter
              </label>
            </div>
          </div>
          <button className="uppercase w-full bg-black outline-none text-white py-4 px-4 rounded-full mt-8">
            Create An Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default Createaccount;
