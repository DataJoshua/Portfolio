import { Link } from "react-router-dom";
import { NavLinkProps } from "../types/AtomTypes";
import { motion } from "framer-motion";

const NavLink = ({ path , label, handleOnClick} : NavLinkProps) =>  {
  
  return <motion.div 
      onClick={()=> handleOnClick()}
      className="text-xl sm:text-3xl hover:underline hover:cursor-pointer"
      whileHover={{scale: 1.2}}
    ><Link to={path}>{label}</Link></motion.div>
};

export default NavLink;