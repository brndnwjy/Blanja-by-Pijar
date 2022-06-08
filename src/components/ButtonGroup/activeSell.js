import React from 'react'
import { Link } from 'react-router-dom'
import './btnGroup.css'

const BtnGroup = () => {
  return (
    <div className='centering'>
      <div className='btn-group user-role' role='group' aria-label='Basic example'>
        <button type='button' className='btn role-btn'>
          <Link to='/customerLogin' className='customer-link'>Customer</Link>
        </button>
        <button type='button' className='btn role-btn active'>
          <Link to='/sellerLogin' className='seller-link'>Seller</Link>
        </button>
      </div>
    </div>

  )
}

export default BtnGroup