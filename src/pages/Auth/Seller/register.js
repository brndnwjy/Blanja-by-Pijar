import React from 'react'
import FormHeader from '../../../components/Auth/formHeader'
import BtnGroup from '../../../components/ButtonGroup2/activeSell'
import RegisterForm from '../../../components/Auth/sellRegister'

const Register = () => {
  return (
    <div className='container'>
        <FormHeader />
        <BtnGroup />
        <RegisterForm />
    </div>
  )
}

export default Register