import React from 'react'
import { CardProps } from './interface'
import { Description } from './Card.style'

const CardDescription: React.FC<CardProps & React.ComponentPropsWithoutRef<'div'>> = ({
    descriptionClassName,
    children,
}) =>{
    return(
        <Description className={descriptionClassName}>
            {children}
        </Description>
    )
}

export default CardDescription