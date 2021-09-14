import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='Navbar'>
      <NavLink exact to='/'>Vending Machine</NavLink>
      <NavLink exact to='/soda'>Soda</NavLink>
      <NavLink exact to='/coffee'>Coffee</NavLink>
      <NavLink exact to='/water'>Water</NavLink>
    </nav>
  )
}

export default Navbar