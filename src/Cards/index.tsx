import React, { useEffect } from 'react'
import { CardsProps } from './interface'
import {
  SecondContainer,
  Title,
  Content,
  FirstContainer,
  Image,
} from './Cards.style'

const Cards: React.FC<CardsProps> = ({ ...props }) => {
  const { imageUrl, title, content } = props

  useEffect(() => {
    const second = document.getElementById('second')
    const first = document.getElementById('first')
    const image = document.getElementById('image')

    if (content == '' && title == '') {
      first!.setAttribute(
        'style',
        'max-height: fit-content * 0/5; max-width: fit-content * 0.5;'
      )
      second!.remove()
    } else if (imageUrl == '') {
      image!.remove()
      first!.setAttribute('style', 'height: fit-content; width: fit-content;')
    } else if (title != '' || content != '') {
      const firstHeight = first!.clientHeight
      const secondHeight = second!.clientHeight
      const imageHeight = firstHeight - secondHeight + 40
      image?.setAttribute(
        'style',
        `max-height: ${imageHeight}px; top: 40px; overflow: visible;`
      )
      first!.setAttribute('style', `max-height: ${imageHeight + secondHeight - 80}px;`)
    }
  }, [])

  return (
    <FirstContainer id="first">
      <Image src={imageUrl} id="image"></Image>
      <SecondContainer id="second">
        {title != '' && <Title>{title}</Title>}
        {content != '' && <Content>{content}</Content>}
      </SecondContainer>
    </FirstContainer>
  )
}

export default Cards
