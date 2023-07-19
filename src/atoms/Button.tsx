import { ButtonProp } from "../types/AtomTypes";
import { motion } from "framer-motion";

const Button = ({handleOnClick, label} : ButtonProp)=> {
  return <motion.button 
    whileHover={{scale: 1.2}}
    onClick={(e : React.MouseEvent<HTMLButtonElement, MouseEvent>)=> handleOnClick(e)}
    className="bg-[#1939ff] text-2xl py-2" 
  >{label}</motion.button>
}

export default Button;