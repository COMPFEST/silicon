import React from 'react'
import { DropdownItem } from './Dropdown.style'
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
        {icon}
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
        {icon}
        {children}
      </DropdownItem>
    )
}

export default Item
