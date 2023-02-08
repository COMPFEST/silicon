export interface StyledCardProps {
  size: 'sm' | 'md' | 'lg'
}

export interface CardProps extends Partial<StyledCardProps> {
  imageUrl?: string
  title?: string
  body?: string
  contentClassName?: string
  titleClassName?: string
  bodyClassName?: string
  imgClassName?: string
  idContent?: string
}

export interface SizesInterface {
  sm: string
  md: string
  lg: string
}
