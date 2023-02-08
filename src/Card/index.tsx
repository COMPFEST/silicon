import React from 'react'
import { CardProps } from './interface'
import { Content, Title, Body, Main, Image } from './Card.style'

const Card: React.FC<CardProps & React.ComponentPropsWithoutRef<'div'>> = ({
  imageUrl,
  title,
  body,
  titleClassName,
  bodyClassName,
  imgClassName,
  contentClassName,
  idContent,
  size = 'md',
  ...props
}) => {
  return (
    <Main size={size} {...props}>
      {imageUrl && <Image src={imageUrl} className={imgClassName}></Image>}
      {(title || body) && (
        <Content className={contentClassName} id={idContent}>
          {title && <Title className={titleClassName}>{title}</Title>}
          {body && <Body className={bodyClassName}>{body}</Body>}
        </Content>
      )}
    </Main>
  )
}

export default Card
