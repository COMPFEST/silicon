import React from 'react'
import { CardProps } from './interface'
import { Description } from './Card.style'

const CardDescription: React.FC<
  CardProps & React.ComponentPropsWithoutRef<'div'>
> = ({ descriptionClassName, children, ...props }) => {
  return (
    <Description className={descriptionClassName} {...props}>
      {children}
    </Description>
  )
}

export default CardDescription
