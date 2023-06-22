import { ReactNode } from 'react'

export interface TabGroupContextProps {
  selectedIndex: number
  setSelectedIndex: (index: number) => void
}

export interface TabGroupProviderProps {
  initialSelectedIndex?: number
  children: ReactNode
}
