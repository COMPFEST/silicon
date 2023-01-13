import React from 'react'
import { DropdownItem, IconContainer, Link, Text } from './Dropdown.style'
import { DropdownItemProps } from './interface'

const Item: React.FC<DropdownItemProps> = ({
  isButton = 'button',
  onClick = null,
  href = '',
  children = '',
  icon = null,
}) => {
  if (isButton === 'button')
    return (
      <DropdownItem
        onClick={() => {
          if (onClick != null) onClick()
        }}
      >
        <IconContainer>{icon}</IconContainer>
        <Text>{children}</Text>
      </DropdownItem>
    )
  else
    return (
      <Link href={href}>
        <DropdownItem>
          <IconContainer>{icon}</IconContainer>
          <Text>{children}</Text>
        </DropdownItem>
      </Link>
    )
}

export default Item
