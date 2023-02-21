import React from 'react'
import { CardProps } from './interface'
import { Content, Title, Body, Main, Description } from './Card.style'

const Card: React.FC<CardProps & React.ComponentPropsWithoutRef<'div'>> = ({
  content,
  title,
  body,
  size = 'md',
  direction = 'horizontal',
  descriptionClassName,
  contentClassName,
  titleClassName,
  bodyClassName,
  ...props
}) => {
  return (
    <Main size={size} direction={direction} {...props}>
      {!!content && (
        <Content direction={direction} className={contentClassName}>
          {content}
        </Content>
      )}
      {(title || body) && (
        <Description className={descriptionClassName}>
          {title && <Title className={titleClassName}>{title}</Title>}
          {body && <Body className={bodyClassName}>{body}</Body>}
        </Description>
      )}
    </Main>
  )
}

export default Card
