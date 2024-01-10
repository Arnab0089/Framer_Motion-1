import React from 'react'
import logo from './pizza-svgrepo-com.svg'

export default function Header() {
  return (
    <>
    <header className='container'>
      <div className='py-10 px-5 flex'>
      <div className='px-10'>
          <img className='max-w-[50px]' src={logo} alt="" />
        </div>
        <div className="text-3xl">
          <h1>Pizza Joint</h1>
        </div>
      </div>
      <hr />
  </header>
  </>
  )
}
