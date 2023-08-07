import { useState } from "react";
import { ProjectProps } from "../types/OrganismsTypes";
import { motion } from "framer-motion";

const Project = ( {title, description, image} : ProjectProps ) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const variants = {
    "open": { display: "flex", scale: 1 },
    "close": { display: "hidden", scale: 0 }
  }

  return (
    <div className="relative inline-block" onMouseOver={()=> setIsOpen(true)} onMouseLeave={()=> setIsOpen(false)}>
      <motion.div animate={isOpen ? "open" : "close"} variants={variants} className="absolute rounded-xl flex justify-center items-center flex-col inset-0 bg-[#999b]">
        <h1 className="font-bold text-3xl">{title}</h1>
        <p>{description}</p>
      </motion.div>
      <div className="rounded-xl overflow-hidden">
        <img className="w-full" src={image} alt="" />    
      </div>
    </div>
  );
};

export default Project;