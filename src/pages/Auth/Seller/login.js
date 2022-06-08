import React from 'react'
import FormHeader from '../../../components/Auth/formHeader'
import LoginForm from '../../../components/Auth/loginForm'
import BtnGroup from '../../../components/ButtonGroup/activeSell'

const Login = () => {
  return (
    <div className='container'>
        <FormHeader />
        <BtnGroup />
        <LoginForm />
    </div>
  )
}

export default Login