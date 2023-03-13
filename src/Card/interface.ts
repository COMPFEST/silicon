import { ReactNode } from 'react'

export interface StyledCardProps {
  size: 'sm' | 'md' | 'lg' | 'full'
  direction: 'vertical' | 'horizontal'
}

export interface CardProps extends Partial<StyledCardProps> {
  content?: ReactNode
  title?: string
  body?: string
  descriptionClassName?: string
  contentClassName?: string
  titleClassName?: string
  bodyClassName?: string
}

export interface SizesInterface {
  sm: DirectionsInterface
  md: DirectionsInterface
  lg: DirectionsInterface
  full: DirectionsInterface
}

export interface DirectionsInterface {
  vertical: string
  horizontal: string
}
