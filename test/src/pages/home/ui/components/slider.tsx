import React, { ChangeEventHandler } from 'react'

interface IPropsSlider {
  errors?: any,
  type?: string,
  name: string,
  label: string,
  value?: string,
  onChangeText?: ChangeEventHandler<HTMLInputElement>
}

const Slider = ({
  type,
  name,
  label,
  value,
  errors,
  onChangeText
}: IPropsSlider) => {
  return (
    <div className='container_input'>
      <label htmlFor={name}>{label}</label>
      <div className='container_slider'>
        <input
          id={name}
          name={name}
          type={type}
          min={18}
          max={100}
          value={value}
          onChange={onChangeText}
        />
        <span>{value} años</span>
      </div>
      {errors[name] && <span className='error'>{errors[name]}</span>}
    </div>
  )
}

export default Slider
