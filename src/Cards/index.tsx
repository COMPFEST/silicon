import React, { useEffect } from 'react'
import { CardsProps } from './interface'
import {
  Content,
  Title,
  Body,
  Main,
  Image,
} from './Cards.style'

const Cards: React.FC<CardsProps> = ({ ...props }) => {
  const { imageUrl, title, body, className, imgClassName, width, height } = props

  // useEffect(() => {
  //   const content = document.getElementById('content')
  //   const main = document.getElementById('main')
  //   const image = document.getElementById('image')

  //   if (imageUrl && (body || title)) {
  //     const firstHeight = main!.clientHeight
  //     const contentHeight = content!.clientHeight
  //     const imageHeight = firstHeight - contentHeight + 40
  //     image?.setAttribute(
  //       'style',
  //       `max-height: ${imageHeight}px; top: 40px; overflow: visible;`
  //     )
  //     main!.setAttribute(
  //       'style',
  //       `max-height: ${imageHeight + contentHeight - 80}px;`
  //     )
  //   }
  // }, [])

  return (
    <Main id="main" className={className} width={width} height={height}>
      {imageUrl != '' && <Image src={imageUrl} id="image" className={imgClassName} height={height} width={width}></Image>}
      {(title != '' || body != '') && <Content id="content" width={width} height={height}>
        {title != '' && <Title>{title}</Title>}
        {body != '' && <Body>{body}</Body>}
      </Content>}
    </Main>
  )
}

export default Cards
