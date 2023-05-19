import { ReactNode } from 'react'

export interface DisclosureProps {
  title: string
  children: ReactNode
  iconColor?: string
  titleContainerClassName?: string
  childrenContainerClassName?: string
}
