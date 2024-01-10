import React from 'react'
import { Link } from 'react-router-dom';

export default function Topings({addTopping, pizza }) {
    let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];



  return (
    <div className='container max-w-[800px] h-[500px] flex items-center justify-center'>
      <div>
      <h3 className='text-xl sm:text-4xl UpperCase text-white py-3'>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active  sm:text-3xl' : '';
          return (
            <li key={topping} onClick={() => addTopping(topping)}
            className='cursor-pointer sm:text-2xl py-2 text-white'>
              <span className={spanClass}>{ topping }</span>
            </li>
          )
        })}
      </ul>

      <Link to="/order">
      <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Next</button>
      </Link>
      </div>
    </div>
  )
}
