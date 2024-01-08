import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scrolltop = () => {
  // access the path
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    console.log(window.scrollTo(0, 0));
 
    console.log("a m activated")
  }, [pathname]);


};

export default Scrolltop;
