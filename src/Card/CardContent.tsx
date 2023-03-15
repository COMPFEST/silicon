import React from 'react'
import { CardProps } from './interface'
import { Content } from './Card.style'

const CardContent: React.FC<CardProps & React.ComponentPropsWithoutRef<'div'>> = ({
    direction = 'horizontal',
    contentClassName,
    children,
}) =>{
    return(
        <Content direction={direction} className={contentClassName}>
            {children}
        </Content>
    )
}

export default CardContent
