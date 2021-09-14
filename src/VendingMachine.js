import React from 'react'
import { Link } from 'react-router-dom';
import './VendingMachine.css'

const VendingMachine = () => {
  return (
    <div className='VendingMachine'>
      <Link exact to='/soda'>Soda</Link>
      <Link exact to='/coffee'>Coffee</Link>
      <Link exact to='/water'>Water</Link>
    </div>
  )
}

export default VendingMachine