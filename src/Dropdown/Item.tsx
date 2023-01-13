import React from 'react'
import { DropdownItem, IconContainer } from './Dropdown.style'
import { DropdownItemProps } from './interface'

const Item: React.FC<DropdownItemProps> = ({
  isButton = 'button',
  onClick = null,
  href = '',
  children = '',
  icon = null,
  isSelected = false,
}) => {
  if (isButton === 'button')
    return (
      <DropdownItem
        onClick={() => {
          if (onClick != null) onClick()
        }}
      >
        <IconContainer>{icon}</IconContainer>
        {children}
      </DropdownItem>
    )
  else
    return (
      <a href={href}>
        <DropdownItem>
          <IconContainer>{icon}</IconContainer>
          {children}
        </DropdownItem>
      </a>
    )
}

export default Item
