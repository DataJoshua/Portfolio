import { motion } from 'framer-motion';
import { SpinnerProps } from '../types/AtomTypes';

const Spinner = ({hasMargin , hasText, size = "50px"} : SpinnerProps) => {
  return (
    <div className={`flex gap-8 ${hasMargin && "mt-[200px]"} justify-center`}>
      {hasText &&  <h1 className="text-2xl">Loading..</h1>}
      <motion.div 
        animate={{scale: [1, 2, 2, 1, 1], rotate: [0, 0, 180, 180, 0], borderRadius: ["0%", "0%", "50%", "50%", "0%"]}} 
        transition={{repeat: Infinity, duration: 2}}
        className={`w-[${size}] h-[${size}] bg-indigo-500 rounded`}
        >
      </motion.div>
    </div>
  );
};

export default Spinner;