import React from 'react'
import { Link } from 'react-router-dom'
import './auth.css'

const RegisterForm = () => {
  return (
    <div class="user-data">
        <form class="input">
            <input type="name" class="form-control" placeholder="Name"/>
            <input type="email" class="form-control" placeholder="Email"/>
            <input type="tel" class="form-control" placeholder="Phone number"/>
            <input type="name" class="form-control" placeholder="Store name"/>
            <input type="password" class="form-control" placeholder="Password"/>
            <button type="submit" class="btn login-btn"><a href="./sellerLogin.html">Sign Up</a></button>
            <small class="form-text">Already have a Blanja account? <Link to='/sellerLogin' class="misc">Log in</Link></small>
        </form>
    </div>
  )
}

export default RegisterForm