import React from 'react'
import { CardsProps } from './interface'
import { Content, Title, Body, Main, Image } from './Cards.style'

const Cards: React.FC<CardsProps & React.ComponentPropsWithoutRef<'div'>> = ({
  imageUrl,
  title = '',
  body,
  className,
  imgClassName,
  size = 'sm',
}) => {
  return (
    <Main id="main" className={className} size={size}>
      {imageUrl != '' && (
        <Image src={imageUrl} id="image" className={imgClassName}></Image>
      )}
      {(title != '' || body != '') && (
        <Content id="content">
          {title != '' && <Title id="title">{title}</Title>}
          {body != '' && <Body>{body}</Body>}
        </Content>
      )}
    </Main>
  )
}

export default Cards
