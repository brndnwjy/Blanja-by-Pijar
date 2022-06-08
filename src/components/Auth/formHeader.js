import React from 'react'
import { Link } from 'react-router-dom'
import './auth.css'

import logo from '../../assets/logo.jpg'

const FormHeader = () => {
  return (
    <div class='header'>
        <Link to='/'>
          <img src={logo} alt='logo'/>
        </Link>
        <span>Please login with your account</span>
    </div>
  )
}

export default FormHeader