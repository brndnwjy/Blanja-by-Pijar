import React from 'react'

const Input = ({id, label, type, placeholder, name, value, onChange}) => {
  return (
    <div className='mb-3'>
        <label htmlFor={id} className='form-label'>
            {label}
        </label>
        <input
        type={type}
        className='form-control'
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange = {onChange}
        />
    </div>
  )
}

export default Input