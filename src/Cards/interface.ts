export interface StyledCardsProps {
  size: 'sm' | 'md' | 'lg'
}

export interface CardsProps extends Partial<StyledCardsProps> {
  imageUrl?: string
  title?: string
  body?: string
  contentClassName?: string
  imgClassName?: string
  id?: string
}

export interface SizesInterface {
  sm: string
  md: string
  lg: string
}
