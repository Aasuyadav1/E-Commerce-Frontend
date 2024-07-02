import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { dataContext } from "../context/Productdata";

const Scrolltop = () => {
  // access the path
  const {setSearchToggle} = useContext(dataContext)
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, [pathname]);
  useEffect(()=>{
    setSearchToggle(false)
  },[pathname])
};

export default Scrolltop;