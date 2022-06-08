import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './auth.css'

const RegisterForm = () => {
  const navigate = useNavigate()

  const [regData, setRegData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'buyer'
  })

  const handleChange = (e) => {
    setRegData({
      ...regData,
      [e.target.name]: e.target.value 
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/v1/user/register', regData)
    .then(() => {
      navigate('/customerLogin')
    })
    .catch((e) => {
      console.log(e)
      alert('invalid')
    })
  }

  return (
    <div className="user-data">
        <form className="input" onSubmit={handleRegister}>
            <input type="username" name='username' value={regData.username} className="form-control" placeholder="Username" onChange={handleChange} />
            <input type="email" name='email' value={regData.email} className="form-control" placeholder="Email" onChange={handleChange} />
            <input type="password" name='password' value={regData.password} className="form-control" placeholder="Password" onChange={handleChange} />
            <button type='submit' className="btn login-btn">Sign Up</button>
            <small className="form-text">Already have a Blanja account? <Link to='/customerLogin' className="misc">Log in</Link></small>
        </form>
    </div>
  )
}

export default RegisterForm