import React, { useEffect, useState } from 'react'
import { CardsProps } from './interface'
import {
    SecondContainer,
    Title,
    Content,
    FirstContainer,
    Image,
} from './Cards.style'

const Cards: React.FC<CardsProps
> = ({
    ...props
}) => {
        const { imageUrl, title, content, onClick } = props

        useEffect(() => {
            var second = document.getElementById('second');
            var first = document.getElementById('first');
            var image = document.getElementById('image');

            if (content == '' && title == ''){
                first!.setAttribute('style', 'height: 220px;')
                second!.style.display = 'none'
            } else if (imageUrl == ''){
                image!.remove()
                first!.setAttribute('style', 'height: fit-content; width: fit-content;')
            }

        }, [])

        return (
            <FirstContainer id='first'>
                <Image src={imageUrl} id='image'>
                </Image>
                <SecondContainer id='second'>
                    <Title>
                        {title}
                    </Title>
                    {content != '' && <Content>
                        {content}
                    </Content>}
                </SecondContainer>
            </FirstContainer>
        )
    }

export default Cards
