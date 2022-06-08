import React from 'react'
import FormHeader from '../../../components/Auth/formHeader'
import BtnGroup from '../../../components/ButtonGroup2/activeCust'
import RegisterForm from '../../../components/Auth/custRegister'

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