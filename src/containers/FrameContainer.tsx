import { motion } from "framer-motion";
import { FrameContainerProp } from "../types/ContainersProps";

const FrameContainer  = ({ children } : FrameContainerProp) => {
  return(
    <motion.div
      initial={{opacity: 0, scale: 0}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: .2}}
    >
      {children}
    </motion.div>
  )
}

export default FrameContainer;