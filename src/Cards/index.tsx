import React from 'react'
import { CardsProps } from './interface'
import { Content, Title, Body, Main, Image } from './Cards.style'

const Cards: React.FC<CardsProps & React.ComponentPropsWithoutRef<'div'>> = ({
  imageUrl,
  title,
  body,
  titleClassName,
  bodyClassName,
  imgClassName,
  contentClassName,
  size = 'md',
  ...props
}) => {
  return (
    <Main size={size} {...props}>
      {imageUrl && <Image src={imageUrl} className={imgClassName}></Image>}
      {(title || body) && (
        <Content className={contentClassName}>
          {title && <Title className={titleClassName}>{title}</Title>}
          {body && <Body className={bodyClassName}>{body}</Body>}
        </Content>
      )}
    </Main>
  )
}

export default Cards
