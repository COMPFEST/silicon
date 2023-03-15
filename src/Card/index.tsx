import React from 'react'
import { CardProps } from './interface'
import { Main } from './Card.style'

const Card: React.FC<CardProps & React.ComponentPropsWithoutRef<'div'>> = ({
  size = 'md',
  direction = 'horizontal',
  backgroundColor,
  children,
}) => {
  return (
    <Main size={size} direction={direction}  style={{background:backgroundColor}}>
      {children}
    </Main>
  )
}

export default Card
