import React from 'react'
import { CardProps } from './interface'
import { Body } from './Card.style'

const CardBody: React.FC<CardProps & React.ComponentPropsWithoutRef<'div'>> = ({
    bodyClassName,
    children,
}) =>{
    return(
        <Body className={bodyClassName}>
            {children}
        </Body>
    )
}

export default CardBody