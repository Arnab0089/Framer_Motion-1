import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="container max-w-[800px] h-screen flex items-center justify-center">
      <motion.div className='text-center'
      initial={{opacity:0}} 
      animate={{opacity:1}}
      transition={{delay:0.5, duration:1.5}}
      >
      <motion.h2 className='text-5xl py-4'
      animate={{ color:'#ff2994'  }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to='/base' className='my-4'>
       
        <motion.button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        animate={{scale:1.5}}
        >Create Your Pizza</motion.button>
      </Link>
    </motion.div>
    </div>
  )
}
