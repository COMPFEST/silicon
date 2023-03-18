import { ReactNode } from 'react'

export interface StyledTabProps {
  selected?: boolean
}

export interface TabProps extends StyledTabProps {
  title?: string
  icon?: ReactNode
}
