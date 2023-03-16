import React from 'react'
import { CardProps } from './interface'
import { Body } from './Card.style'

const CardBody: React.FC<CardProps & React.ComponentPropsWithoutRef<'div'>> = ({
  bodyClassName,
  children,
  ...props
}) => {
  return (
    <Body className={bodyClassName} {...props}>
      {children}
    </Body>
  )
}

export default CardBody
