import { ReactNode } from 'react'

export interface StyledCardProps {
  size: 'sm' | 'md' | 'lg'
}

export interface CardProps extends Partial<StyledCardProps> {
  content?: ReactNode
  title?: string
  body?: string
}

export interface SizesInterface {
  sm: string
  md: string
  lg: string
}
