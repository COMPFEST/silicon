import { ReactElement } from 'react'
import { TabProps } from '../Tab/interface'

export interface TabGroupProps {
  initialSelectedIndex?: number
  children?: ReactElement<TabProps>[]
}
