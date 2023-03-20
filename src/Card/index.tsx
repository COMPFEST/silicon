import React from 'react'
import { CardProps } from './interface'
import { Container } from './Card.style'

const Card: React.FC<CardProps & React.ComponentPropsWithoutRef<'div'>> = ({
  size = 'md',
  direction = 'horizontal',
  backgroundColor,
  children,
  ...props
}) => {
  return (
    <Container
      size={size}
      direction={direction}
      style={{ background: backgroundColor }}
      {...props}
    >
      {children}
    </Container>
  )
}

export default Card
