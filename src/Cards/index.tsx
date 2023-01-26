import React from 'react'
import { CardsProps } from './interface'
import { Content, Title, Body, Main, Image } from './Cards.style'

const Cards: React.FC<CardsProps & React.ComponentPropsWithoutRef<'div'>> = ({
  imageUrl,
  title,
  body,
  contentClassName,
  imgClassName,
  id,
  size = 'md',
  ...props
}) => {
  return (
    <Main id={id} size={size} {...props}>
      {imageUrl && <Image src={imageUrl} className={imgClassName}></Image>}
      {(title || body) && (
        <Content className={contentClassName}>
          {title && <Title>{title}</Title>}
          {body && <Body>{body}</Body>}
        </Content>
      )}
    </Main>
  )
}

export default Cards
