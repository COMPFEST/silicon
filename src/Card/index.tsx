import React from 'react'
import { CardProps } from './interface'
import { Content, Title, Body, Main, Description } from './Card.style'

const Card: React.FC<CardProps & React.ComponentPropsWithoutRef<'div'>> = ({
  content,
  title,
  body,
  size = 'md',
  ...props
}) => {
  return (
    <Main size={size}>
      {!!content && <Content>{content}</Content>}
      {(title || body) && (
        <Description {...props}>
          {title && <Title>{title}</Title>}
          {body && <Body>{body}</Body>}
        </Description>
      )}
    </Main>
  )
}

export default Card
