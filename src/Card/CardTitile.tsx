import React from 'react'
import { CardProps } from './interface'
import { Title } from './Card.style'

const CardTitle: React.FC<
  CardProps & React.ComponentPropsWithoutRef<'div'>
> = ({ titleClassName, children, ...props }) => {
  return (
    <Title className={titleClassName} {...props}>
      {children}
    </Title>
  )
}

export default CardTitle
