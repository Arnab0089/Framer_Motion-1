import React from 'react'
import { Link } from 'react-router-dom'

export default function Order({ pizza }) {
  return (
    <div className='container max-w-[800px] h-[500px] flex items-center justify-center text-white text-center'>
      <div>
      <h2 className='font-bold sm:text-3xl py-3'>Thank you for your order :)</h2>
      <p className='sm:text-2xl text-black'>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map(topping => <div className='py-3 sm:text-2xl' key={topping}>{topping}</div>)}
      <Link to="/" className='py-2'>

        <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Reset Progress</button>
      </Link>

      </div>

    </div>
  )
}
