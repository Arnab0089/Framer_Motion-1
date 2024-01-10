import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container max-w-[800px] h-screen flex items-center justify-center">
      <div className='text-center' >
      <h2 className='text-5xl py-4'>
        Welcome to Pizza Joint
      </h2>
      <Link to='/base' className='my-4'>
       
        <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Create Your Pizza</button>
      </Link>
    </div>
    </div>
  )
}
