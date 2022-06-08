import React from 'react'
import { Navigate } from 'react-router-dom'

const RequiredAuth = ({children}) => {
  const isAuth = localStorage.getItem('token')
  if(!isAuth){
    return (
      <Navigate to='/customerLogin' replace />
    )
  } 
  return children
}

export default RequiredAuth