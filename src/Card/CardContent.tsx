import React from 'react'
import { CardProps } from './interface'
import { Content } from './Card.style'

const CardContent: React.FC<
  CardProps & React.ComponentPropsWithoutRef<'div'>
> = ({ direction = 'horizontal', contentClassName, children, ...props }) => {
  return (
    <Content direction={direction} className={contentClassName} {...props}>
      {children}
    </Content>
  )
}

export default CardContent
