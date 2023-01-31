import { ReactElement, ReactNode } from 'react'

export interface StyledDropdownProps {
  mobile?: boolean
  isActive?: boolean
}

export interface DropdownProps extends Partial<StyledDropdownProps> {
  children: ReactElement<DropdownItemProps>[]
}

export interface DropdownItemProps extends Partial<StyledDropdownProps> {
  isButton?: boolean
  onClick?: () => void
  href?: string
  children: string
  icon?: ReactNode
  isSelected?: boolean
}
