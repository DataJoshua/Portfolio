import { useState } from "react";
import { ProjectProps } from "../types/OrganismsTypes";
import { Variant, delay, motion } from "framer-motion";

const Project = ( {title, description, image} : ProjectProps ) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const variants = {
    "open": { display: "flex", scale: 1 },
    "close": { display: "hidden", scale: 0 }
  }

  const variants2 = {
    "appear": { opacity: 1 },
    "disappear": { opacity: 0 }
  }

  return (
    <div className="relative hover:cursor-pointer" onMouseOver={()=> setIsOpen(true)} onMouseLeave={()=> setIsOpen(false)}>
      <motion.div  animate={isOpen ? "appear" : "disappear"} variants={variants2} transition={{duration : .5}} className="absolute rounded-xl inset-0 bg-[#999b]">
        <motion.div className="flex justify-center items-center flex-col w-full h-full" transition={{delay: .2}} animate={isOpen ? "open" : "close"} variants={variants}>
          <h1 className="font-bold text-3xl">{title}</h1>
          <p>{description}</p>
        </motion.div>
      </motion.div>
      <div className="rounded-xl overflow-hidden">
        <img className="w-full" src={image} alt="" />  
      </div>
    </div>
  );
};

export default Project;