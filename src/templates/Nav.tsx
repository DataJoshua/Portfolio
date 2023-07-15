import { useState } from "react";
import CloseSvg from "../atoms/CloseSvg";
import MenuSvg from "../atoms/MenuSvg";
import NavLink from "../atoms/NavLink";
import { motion } from "framer-motion";
import FloatingNav from "../organisms/FloatingNav";

const Nav = ()=> {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  
  const toggleNav = ()=> setIsHidden(prev => !prev)
  
  return(
    <>
      <nav className="flex items-center justify-between py-8 px-8 sm:px-[150px]">
        <h1 className="text-2xl">Web Development</h1>
        <button className="hover:cursor-pointer" onClick={toggleNav}>
          <MenuSvg/>
        </button>
        <FloatingNav isHidden={isHidden} toggleNav={toggleNav}/>
      </nav>  
    </>
  )
};

export default Nav;
