import { ReactNode } from 'react'

export interface ChipProps {
  isSelected?: boolean
  onClick?: () => void
  leftIcon?: ReactNode
  children: ReactNode
}
