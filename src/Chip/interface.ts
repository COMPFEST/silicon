import { ReactNode } from 'react'

export interface ChipProps {
  isSelected?: boolean
  onClick?: () => void
  showLeftIcon?: boolean
  leftIcon?: ReactNode
  children: ReactNode
  disabled?: boolean
  variant?: 'default' | 'success' | 'danger' | 'warning'
}
