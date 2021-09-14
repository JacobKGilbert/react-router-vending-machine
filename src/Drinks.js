import React from 'react'
import { Link } from 'react-router-dom';
import './Drinks.css'

const Soda = () => {
  return (
    <div className='Drink'>
      <h3>Soda</h3>
      <p>Ahhh... Crisp</p>
      <Link exact to='/'>Back</Link>
    </div>
  )
}

const Coffee = () => {
  return (
    <div className='Drink'>
      <h3>Coffee</h3>
      <p>Oooh that's strong!</p>
      <Link exact to="/">Back</Link>
    </div>
  )
}

const Water = () => {
  return (
    <div className='Drink'>
      <h3>Water</h3>
      <p>So refreshing!</p>
      <Link exact to="/">Back</Link>
    </div>
  )
}

export {
  Soda,
  Coffee,
  Water
}