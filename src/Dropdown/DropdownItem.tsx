import React from 'react'
import { StyledDropdownItem, IconContainer, Link, Text } from './Dropdown.style'
import { DropdownItemProps } from './interface'

const DropdownItem: React.FC<DropdownItemProps> = ({
  isButton = true,
  onClick = null,
  href = '',
  children = '',
  icon = null,
}) => {
  if (isButton === 'button')
    return (
      <StyledDropdownItem
        onClick={() => {
          if (onClick != null) onClick()
        }}
      >
        <IconContainer>{icon}</IconContainer>
        <Text>{children}</Text>
      </StyledDropdownItem>
    )
  else
    return (
      <Link href={href}>
        <StyledDropdownItem>
          <IconContainer>{icon}</IconContainer>
          <Text>{children}</Text>
        </StyledDropdownItem>
      </Link>
    )
}

export default DropdownItem
