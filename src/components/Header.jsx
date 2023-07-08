import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import './Header.css'
const Header = () => {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to={'/'}>Shop</Link>
        <Link to={'/Cart'}> <FiShoppingCart /> </Link>
      </div>
    </div>
  )
}

export default Header