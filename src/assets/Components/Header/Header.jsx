import React from 'react'
import logo from './pizza-svgrepo-com.svg'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <>
    <header className='container'>
      <div className='py-10 px-5 flex'>
        <div className='px-10'>
          <img className='max-w-[50px]' src={logo} alt="" />
        </div>
        <motion.div className="text-3xl"
        initial={{y:-250}}
        animate={{y:10}}
        transition={{delay:0.2, type:'spring',stiffness:220 }}
        >
          <h1>Pizza Joint</h1>
        </motion.div>
      </div>
      <hr />
  </header>
  </>
  )
}
