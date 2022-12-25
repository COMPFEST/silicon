import { ReactNode } from 'react'

export interface StyledButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'ghost'
  size: 'small' | 'regular'
}

export interface ButtonProps extends Partial<StyledButtonProps> {
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  disabled?: boolean
  children: ReactNode
  isLoading?: boolean
  onClick?: () => void
}

export interface VariantsInterface {
  primary: string
  secondary: string
  tertiary: string
  ghost: string
}
