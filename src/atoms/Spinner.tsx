import { motion } from 'framer-motion';

const Spinner = () => {
  return (
    <div className='flex gap-8 mt-[200px] justify-center'>
      <h1 className="text-2xl">Loading..</h1>
      <motion.div 
        animate={{scale: [1, 2, 2, 1, 1], rotate: [0, 0, 180, 180, 0], borderRadius: ["0%", "0%", "50%", "50%", "0%"]}} 
        transition={{repeat: Infinity, duration: 2}}
        className="w-[50px] h-[50px] bg-indigo-500 rounded"
        >
      </motion.div>
    </div>
  );
};

export default Spinner;