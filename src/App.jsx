import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './assets/Components/Header/Header'
import './App.css'
import Home from './assets/Components/Home/Home'
import Base from './assets/Components/Base/base';
import Topings from './assets/Components/Topings/Topings';
import Order from './assets/Components/Order/Order';

export default function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }

  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }


  return (
    <div>
      <>
      <Router>
      <Header/>
          
          <Routes>
            <Route path="/base" 
              element={<Base addBase={addBase} pizza={pizza}/>} />
          </Routes>
          <Routes>
            <Route path="/toppings" 
              element={<Topings addTopping={addTopping} pizza={pizza}/>} />
          </Routes>
          <Routes>
            <Route path="/order" 
              element={<Order pizza={pizza}/>} />
          </Routes>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
     
      </Router>
    </>
    </div>
  )
}
