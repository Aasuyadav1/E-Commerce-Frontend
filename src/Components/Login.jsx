import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [passwordType, setPasswordType] = useState("password");

  const navigate = useNavigate()

  const handleCheckBox = (e) => {
    const checkboxValue = e.target.checked;
    checkboxValue ? setPasswordType("text") : setPasswordType("password");
  };


  const createAccount = ()=>{
    navigate('/createaccount')
  }

  return (
    <div className="mt-32 ">
      <h1 className="text-4xl text-black text-center mt-4 font-semibold px-3">
        Customer Login
      </h1>
      <div className="text-xl text-center justify-center items-center flex gap-1 mt-1 cursor-pointer px-3">
        <Link to="/">Home</Link> /{" "}
        <span className="opacity-70">Customer Login</span>
      </div>
      <div className="sm:mt-24 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-32 gap-y-24 px-3 lg:px-24">
        <div>
          <div>
            <h1 className="text-black text-2xl font-semibold">
              Registered Customers
            </h1>
            <p className="text-black mt-4 opacity-90">
              If you have an account, sign in with your email address.
            </p>
            <form>
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
                  placeholder="Email"
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
                  name="email"
                  className="py-2 px-4 block w-full border-black border-[1px] border-solid  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none rounded-full "
                  required
                  placeholder="password"
                />
                <div className="flex gap-3 mt-4 items-center">
                  <input
                    type="checkbox"
                    id="check"
                    name="checkbox"
                    className="text-black duration-75 ease-in-out"
                    onChange={handleCheckBox}
                  />
                  <label htmlFor="check" className="cursor-pointer select-none">
                    {" "}
                    Show Password
                  </label>
                </div>
              </div>
              <button className="uppercase w-full bg-black outline-none text-white py-4 px-4 rounded-full mt-6">
                Sign In
              </button>
              <div className="flex justify-between items-center gap-2 mt-4">
                <p className="text-red-500 ">Requireds Fields *</p>
                <p>Forgot Your Password?</p>
              </div>
            </form>
          </div>
        </div>
        <div>
        <h1 className="text-black text-2xl font-semibold">
        Create an Account
            </h1>
            <p className="text-black mt-4 opacity-90">
            Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails. 
            </p>
            <button className="uppercase w-full bg-black outline-none text-white py-4 px-4 rounded-full mt-10" onClick={createAccount}>
                Create An Account
              </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
