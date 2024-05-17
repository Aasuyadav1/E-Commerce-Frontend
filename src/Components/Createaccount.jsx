import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Createaccount() {
  const [passwordType, setPasswordType] = useState("password");
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleCheckBox = (e) => {
    const checkboxValue = e.target.checked;
    checkboxValue ? setPasswordType("text") : setPasswordType("password");
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.name || !formData.email || !formData.password){
      alert('Please enter name, email and password')
      return
    }
    try {
      setLoader(true)
      const response = await axios.post(`https://reqres.in/api/users`, formData)

      if(response.ok){
        setFormData({
          name: "",
          email: "",
          password: ""
        })
        setLoader(false)
      }
    } catch (error) {
      console.log("axios error", error)
      setLoader(false)
    } finally {
      setLoader(false)
    }
  }


  return (
    <div className="mt-32 px-3">
      <h1 className="text-4xl text-black text-center mt-4 font-semibold px-3">
        Create New Customer Account
      </h1>
      <div className="text-xl text-center justify-center items-center flex gap-1 mt-1 cursor-pointer px-3">
        <Link to="/">Home</Link> /{" "}
        <span className="opacity-70">Create New Customer Account</span>
      </div>

      <form onSubmit={handleSubmit} className="sm:mt-24 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-32 gap-y-10 px-3 lg:px-24">
        <div>
          <h1 className="text-black text-2xl font-semibold">
            Personal Information
          </h1>
          <div className="mt-5">
            <label
              htmlFor="name"
              className="block select-none font-medium mb-2 text-xl"
            >
               Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              required
              className="py-2 px-4 block w-full border-black border-[1px] border-solid  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none rounded-full "
              placeholder=" name"
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            />
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
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
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
              name="password"
              className="py-2 px-4 block w-full border-black border-[1px] border-solid  focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none rounded-full "
              required
              placeholder="password"
              onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
            />
        
         
          </div>
          <button type="submit" className={`uppercase w-full bg-black outline-none text-white py-4 px-4 rounded-full mt-8 ${loader && "cursor-not-allowed opacity-50 "} `} disabled={loader}>
            {loader ? "signing in..." : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Createaccount;
