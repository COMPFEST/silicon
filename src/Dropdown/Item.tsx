import React from 'react'
import { DropdownItem } from './Dropdown.style'
import { DropdownItemProps } from './interface'

const Item: React.FC<DropdownItemProps> = ({
  isButton = 'button',
  onClick = undefined,
  href = '',
  children = '',
  icon = null,
}) => {
  if (isButton == 'button')
    return (
      <DropdownItem onClick={onClick}>
        {icon}
        {children}
      </DropdownItem>
    )
  else
    return (
      <DropdownItem
        onClick={(e) => {
          e.preventDefault()
          window.location.href = href
        }}
      >
        {icon}
        {children}
      </DropdownItem>
    )
}

export default Item
