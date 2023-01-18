import React from 'react'
import { CardsProps } from './interface'
import { Content, Title, Body, Main, Image } from './Cards.style'

const Cards: React.FC<CardsProps> = ({ ...props }) => {
  const { imageUrl, title, body, className, imgClassName, width, height } =
    props

  return (
    <Main id="main" className={className} width={width} height={height}>
      {imageUrl != '' && (
        <Image
          src={imageUrl}
          id="image"
          className={imgClassName}
          height={height}
          width={width}
        ></Image>
      )}
      {(title != '' || body != '') && (
        <Content id="content" width={width} height={height}>
          {title != '' && <Title>{title}</Title>}
          {body != '' && <Body>{body}</Body>}
        </Content>
      )}
    </Main>
  )
}

export default Cards
