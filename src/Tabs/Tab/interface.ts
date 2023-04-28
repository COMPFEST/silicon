import { ReactNode } from 'react'

export interface StyledTabProps {
  selected?: boolean
}

export interface TabProps {
  title?: string
  icon?: ReactNode
  onSelected?: () => void
  index?: number
  selectedClassName?: string
  unselectedClassName?: string
}
