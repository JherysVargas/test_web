import React from 'react'
import '../styles/card.css'

interface IPropsCard {
  children?: JSX.Element | JSX.Element[]
}

const Card = ({ children }: IPropsCard) => {
  return (
    <div className='card'>
      {children}
    </div>
  )
}

export default Card
