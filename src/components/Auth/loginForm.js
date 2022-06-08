import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import userLogin from '../../configs/redux/actions/user'
import './auth.css'

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name] : e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(userLogin(formLogin, navigate('/')))
  }

  return (
    <div class="user-data">
        <form class="input" onSubmit={handleLogin}>
            <input type="email" name='email' value={formLogin.email} class="form-control" placeholder="Email" onChange={handleChange}/>
            <input type="password" name='password' value={formLogin.password} class="form-control" placeholder="Password" onChange={handleChange}/>
            <small class="form-text text-muted reset">
                <Link to="./resetPassword.html" class="misc">
                    Forgot Password?
                </Link>
            </small>
            <button type="submit" class="btn login-btn">Login</button>
            <small class="form-text">Don't have a Blanja account? <Link to='/customerRegister' class="misc">Register </Link></small>
        </form>
    </div>
  )
}

export default LoginForm