import React from 'react'
import {
  StyledDropdownButtonItem,
  IconContainer,
  Text,
  StyledDropdownLinkItem,
} from './Dropdown.style'
import { DropdownItemProps } from './interface'

const DropdownItem: React.FC<DropdownItemProps> = ({
  isButton = true,
  onClick = null,
  href = '',
  children = '',
  icon = null,
}) => {
  if (isButton)
    return (
      <StyledDropdownButtonItem
        onClick={() => {
          if (onClick != null) onClick()
        }}
      >
        <IconContainer>{icon}</IconContainer>
        <Text>{children}</Text>
      </StyledDropdownButtonItem>
    )
  else
    return (
      <StyledDropdownLinkItem as="a" href={href}>
        <IconContainer>{icon}</IconContainer>
        <Text>{children}</Text>
      </StyledDropdownLinkItem>
    )
}

export default DropdownItem
