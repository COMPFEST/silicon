import { ReactNode } from 'react'

export interface SizesInterface {
  size: 'sm' | 'md' | 'lg'
}

export interface DisclosureProps extends Partial<SizesInterface> {
  title: string
  children: ReactNode
  mainProps: any
  childrenProps: any
  titleProps: any
}
