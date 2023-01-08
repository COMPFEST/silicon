import React from 'react'
import { DropdownItem, IconContainer } from './Dropdown.style'
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
        {children}
      </DropdownItem>
    )
  else
    return (
      <DropdownItem
        onClick={() => {
          if (href != '') {
            window.location.href = href
          }
        }}
      >
        <IconContainer>{icon}</IconContainer>
        {children}
      </DropdownItem>
    )
}

export default Item
