import React, { ChangeEventHandler } from 'react'

interface IPropsInput {
  errors?: any,
  type?: string,
  name: string,
  label: string,
  value?: string,
  onChangeText?: ChangeEventHandler<HTMLInputElement>
}

const Input = ({
  type,
  name,
  label,
  value,
  errors,
  onChangeText
}: IPropsInput) => {
  return (
    <div className='container_input'>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        className={errors[name] ? 'input_error' : ''}
        onChange={onChangeText}
      />
      {errors[name] && <span className='error'>{errors[name]}</span>}
    </div>
  )
}

export default Input
