import { motion } from "framer-motion";
import CloseSvg from "../atoms/CloseSvg";
import { FloatingNavProps } from "../types/OrganismsTypes";
import NavLink from "../atoms/NavLink";

const FloatingNav = ({isHidden, toggleNav} : FloatingNavProps)=> {

  const variants = {
    open: { display: "flex", y: 0 },
    closed: { y : "-100%"},
  }

  return (
    <motion.div 
      animate={isHidden ? "closed" : "open"}
      variants={variants}
      className={`fixed lg:left-[75%] z-[100] right-0 bg-slate-900 top-0 h-full w-[50%] lg:w-[25%] justify-center flex pt-[100px]`}
    >

    <div className="absolute top-5 right-5 hover:cursor-pointer" onClick={()=>toggleNav()}>
      <CloseSvg/>
    </div>
      <ul className="flex flex-col gap-10">
        <NavLink path="/" label="home" handleOnClick={()=> toggleNav()}/>
        <NavLink path="/contact" label="contact" handleOnClick={()=> toggleNav()}/>
        <NavLink path="/projects" label="projects" handleOnClick={()=> toggleNav()}/>
        <NavLink path="/about" label="about" handleOnClick={()=> toggleNav()}/>
      </ul>
    </motion.div>
  )
};

export default FloatingNav;